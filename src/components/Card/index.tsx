import { useRouter } from 'next/router';

import basic from '../../assets/basic.svg';
import startup from '../../assets/startup.svg';
import nextLevel from '../../assets/nextLevel.svg';

import {
  Container,
  Header,
  Image,
  PlanHeaderInfo,
  PlanName,
  Amount,
  PerUser,
  BodyCard,
  BenefitItem,
  CheckIcon,
  BenefitLabel,
  ChoosePlanButton,
  PopularTag,
  AmountValue,
  ButtonIcon,
} from './styles';

interface CardProps {
  card: {
    id: string;
    plan: string;
    amount: number;
    benefits: Array<string>;
    compact: boolean;
    isPopular: boolean;
  };
}

export const Card = ({ card }: CardProps) => {
  const router = useRouter();

  function handleGoToPlan(id: string) {
    router.push(`/product/${id}`);
  }

  function getPlanImageSource(plan: 'Basic' | 'Startup' | 'Next Level') {
    const plans = {
      basic,
      startup,
      'next level': nextLevel,
    };

    return plans[plan.toLowerCase() as 'basic' | 'startup' | 'next level'];
  }

  const imageSource = getPlanImageSource(card.plan as 'Basic' | 'Startup' | 'Next Level');

  return (
    <Container compact={card.compact}>
      <Header>
        <Image src={imageSource} width={84} height={84} />

        <PlanHeaderInfo>
          <PlanName>{card.plan}</PlanName>

          <Amount>
            <AmountValue compact={card.compact}>{card.amount}</AmountValue> <PerUser>/ user</PerUser>
          </Amount>
        </PlanHeaderInfo>

        <PopularTag visible={card.isPopular} />
      </Header>

      <BodyCard>
        {card.benefits.map((benefit) => (
          <BenefitItem key={`${benefit}-${Math.random()}`} compact={card.compact}>
            <CheckIcon />
            <BenefitLabel compact={card.compact}>{benefit}</BenefitLabel>
          </BenefitItem>
        ))}
      </BodyCard>

      <ChoosePlanButton compact={card.compact} onClick={() => handleGoToPlan(card.id)}>
        Choose Plan <ButtonIcon size={30} />
      </ChoosePlanButton>
    </Container>
  );
};
