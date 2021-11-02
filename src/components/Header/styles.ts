import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: auto;
  margin-top: 1rem;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  color: ${({ theme }) => theme.colors['black-400']};
  font-weight: bold;
`;

export const NavContainer = styled.ul`
  height: 100%;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSize.body.lg};
    text-decoration: none;
    color: ${({ theme }) => theme.colors['black-400']};
  }
`;
