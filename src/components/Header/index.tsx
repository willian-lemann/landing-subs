import Link from 'next/link';

import { Container, Logo, LogoContainer, NavContainer } from './styles';

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>Wipi Consultoria</Logo>
      </LogoContainer>

      <NavContainer>
        <Link href="">about</Link>
        <Link href="">blog</Link>
        <Link href="">contact</Link>
      </NavContainer>
    </Container>
  );
};
