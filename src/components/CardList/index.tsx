import { Card } from '../Card';

import { basic, nextLevel, startup } from '../../mock/benefits';

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
  const plans = products
    .map((product, index) => {
      const planNameBasedOnIndex = {
        0: 'Next Level',
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

      const benefitsBasedOnIndex = {
        0: nextLevel,
        1: startup,
        2: basic,
      };

      return {
        id: product.id,
        plan: planNameBasedOnIndex[index as IndexType],
        amount: product.amount,
        benefits: benefitsBasedOnIndex[index as IndexType],
        compact: isCompactBasedOnIndex[index as IndexType],
        isPopular: isPopularBasedOnIndex[index as IndexType],
      };
    })
    .reverse();

  return (
    <Container>
      {plans.map((plan) => (
        <Card key={plan.id} card={plan} />
      ))}
    </Container>
  );
};
