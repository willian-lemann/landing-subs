import React from 'react';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

import { Container, Content, TitleContainer, Title, HightlightText, Subtitle, CardList } from '../styles/home';

const cards = [
  {
    id: 1,
    plan: 'Basic',
    amount: 10,
    benefits: ['Get started with messaging', 'Get started with messaging', 'Get started with messaging'],
    compact: true,
    isPopular: false,
  },
  {
    id: 2,
    plan: 'Startup',
    amount: 24,
    benefits: ['Get started with messaging', 'Get started with messaging', 'Get started with messaging'],
    compact: false,
    isPopular: true,
  },
  {
    id: 3,
    plan: 'Enterprise',
    amount: 35,
    benefits: ['Get started with messaging ', 'Get started with messaging', 'Get started with messaging'],
    compact: true,
    isPopular: false,
  },
];

const Home = () => {
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

        <CardList>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </CardList>
      </Content>
    </Container>
  );
};

export default Home;
