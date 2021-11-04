import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors['dark-gray']};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: auto;
  min-width: 1200px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HightlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Subtitle = styled.span`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors['black-400']};
  font-family: ${({ theme }) => theme.fonts.primary};
`;
