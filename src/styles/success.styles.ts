import styled from 'styled-components';
import { MdCheck, MdArrowForward } from 'react-icons/md';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div``;

export const SuccessLabel = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const CheckIcon = styled(MdCheck)``;
