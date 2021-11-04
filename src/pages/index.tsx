import Stripe from 'stripe';
import { GetStaticProps } from 'next';

import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { stripe } from '../config/stripe';

import { Container, Content, TitleContainer, Title, HightlightText, Subtitle } from './styles';
import { CardList } from '../components/CardList';



interface HomeProps {
  products: Array<{
    id: string;
    amount: number;
  }>;
}

export default function Home({ products }: HomeProps) {
  return (
    <Container>
      <Header />

      <Content>
        <TitleContainer>
          <Title>
            <HightlightText>Flexible</HightlightText> Plans
          </Title>
          <Subtitle>Choose your plan that works best for you and your teams</Subtitle>
        </TitleContainer>

        <CardList products={products} />
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prices = await stripe.prices.list();

  const products = prices.data.map((price: Stripe.Price) => {
    return {
      id: price.id,
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
