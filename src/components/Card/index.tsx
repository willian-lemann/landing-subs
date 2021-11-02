import { useTheme } from 'styled-components';

import Basic from '../../assets/basic.svg';
import Startup from '../../assets/startup.svg';
import Enterprise from '../../assets/enterprise.svg';

import {
  Container,
  Header,
  PlanHeaderInfo,
  PlanName,
  Amount,
  PerUser,
  BodyCard,
  BenefitItem,
  BenefitLabel,
  Icon,
  ChoosePlanButton,
  PopularTag,
  AmountValue,
  ButtonIcon,
} from './styles';

interface CardProps {
  card: {
    id: number;
    plan: string;
    amount: number;
    benefits: Array<string>;
    compact: boolean;
    isPopular: boolean;
  };
}

export const Card = ({ card }: CardProps) => {
  const theme = useTheme();

  function getPlanLogo(plan: string) {
    const plans = {
      Basic: <Basic />,
      Startup: <Startup />,
      Enterprise: <Enterprise />,
    };

    return plans[plan as 'Basic' | 'Startup' | 'Enterprise'];
  }

  return (
    <Container compact={card.compact}>
      <Header>
        {getPlanLogo(card.plan)}

        <PlanHeaderInfo>
          <PlanName compact={card.compact}>{card.plan}</PlanName>

          <Amount>
            R$ <AmountValue compact={card.compact}>{card.amount}</AmountValue> <PerUser>/ user</PerUser>
          </Amount>
        </PlanHeaderInfo>

        <PopularTag visible={card.isPopular} />
      </Header>

      <BodyCard>
        {card.benefits.map((benefit) => (
          <BenefitItem key={benefit} compact={card.compact}>
            <Icon size={24} color={card.compact ? theme.colors.black : theme.colors.white} />
            <BenefitLabel compact={card.compact}>{benefit}</BenefitLabel>
          </BenefitItem>
        ))}
      </BodyCard>

      <ChoosePlanButton compact={card.compact}>
        Choose Plan <ButtonIcon size={30} />
      </ChoosePlanButton>
    </Container>
  );
};
