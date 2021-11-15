import Stripe from 'stripe';
import Image from 'next/image';
import Link from 'next/link';

import { GetStaticProps, GetStaticPaths } from 'next';
import { stripePromise } from '../../config/stripeConfig';
import { stripe } from '../../config/stripeClient';

import { Container } from '../../styles/product.styles';

type Product = Pick<Stripe.Product, 'images' | 'name'>;

interface ProductProps {
  price: {
    id: string;
  };

  product: Product;
}

export default function Product({ price, product }: ProductProps) {
  async function handleCheckout() {
    const stripeClient = await stripePromise;

    await stripeClient?.redirectToCheckout({
      lineItems: [
        {
          price: price.id, // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success?itemName=${product.name}`,
      cancelUrl: 'http://localhost:3000/',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }

  return (
    <Container>
      {product?.images.map((image: string) => (
        <>
          <Image key={image} src={image} height={200} width={200} objectFit="cover" />
          <p style={{ fontSize: 20 }}>Imagem do produto</p>
        </>
      ))}

      <strong style={{ fontSize: 20 }}>{product?.name}</strong>

      <button type="button" onClick={handleCheckout}>
        Go to checkout
      </button>

      <Link href="/">Go back</Link>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: prices } = await stripe.prices.list();

  const paths = prices.map((price) => ({ params: { id: price.id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const price = await stripe.prices.retrieve(id, { expand: ['product'] },);

  return {
    props: {
      price,
      product: price.product,
    },
  };
};
