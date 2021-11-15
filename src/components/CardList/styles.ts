import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;
