import { useRouter } from 'next/router';

import { Container, Content, Subtitle, SuccessLabel, CheckIcon } from '../styles/success.styles';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <SuccessLabel> Parabéns, você comprou o plano {router.query.itemName}</SuccessLabel>

        <Subtitle>Agora você vai poder...</Subtitle>

        <ul>
          <li>
            <CheckIcon />
            <CheckIcon />
            <CheckIcon />
          </li>
        </ul>
      </Content>
    </Container>
  );
}
