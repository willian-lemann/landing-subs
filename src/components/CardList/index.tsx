import { Card } from '../Card';

import { Container } from './styles';

type IndexType = 0 | 1 | 2;

interface Plan {
  id: string;
  amount: number;
}

interface CardListProps {
  products: Array<Plan>;
}

export const CardList = ({ products }: CardListProps) => {
  const plans = products.map((product, index) => {
    const planNameBasedOnIndex = {
      0: 'Enterprise',
      1: 'Startup',
      2: 'Basic',
    };

    const isPopularBasedOnIndex = {
      0: false,
      1: true,
      2: false,
    };

    const isCompactBasedOnIndex = {
      0: true,
      1: false,
      2: true,
    };

    return {
      id: product.id,
      plan: planNameBasedOnIndex[index as IndexType],
      amount: product.amount,
      benefits: ['Get started with messaging ', 'Get started with messaging', 'Get started with messaging'],
      compact: isCompactBasedOnIndex[index as IndexType],
      isPopular: isPopularBasedOnIndex[index as IndexType],
    };
  });

  return (
    <Container>
      {plans.map((plan) => (
        <Card key={plan.id} card={plan} />
      ))}
    </Container>
  );
};
