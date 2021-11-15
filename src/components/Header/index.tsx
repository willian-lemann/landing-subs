import Link from 'next/link';

import { Container, Logo, LogoContainer, NavContainer } from './styles';

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>Wipi Consultoria</Logo>
      </LogoContainer>

      <NavContainer>
        <Link href="#">About</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </NavContainer>
    </Container>
  );
};
