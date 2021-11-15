import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: unset;
  }
`;

export const Content = styled.div`
  width: auto;

  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: unset;
  }
`;

export const TitleContainer = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HightlightText = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Subtitle = styled.span`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
