import styled from 'styled-components';
import NextImage from 'next/image';

import { MdCheck, MdArrowForward } from 'react-icons/md';

interface ContainerProps {
  compact: boolean;
}

export const Container = styled.li<ContainerProps>`
  height: auto;
  min-height: 566px;
  min-width: 440px;
  max-width: 430px;
  background-color: ${({ theme }) => theme.colors['black-400']};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: outline 0.2s ease;

  &:hover {
    outline: 3px solid ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:nth-child(3) {
      margin-bottom: 4rem;
    }

    width: 90vw;
    margin-bottom: 4rem;
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: center;
`;

export const Image = styled(NextImage)``;

export const PlanHeaderInfo = styled.section`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const PlanName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const Amount = styled.strong`
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-top: 1rem;
`;

interface AmountValueProps {
  compact: boolean;
}

export const AmountValue = styled.span<AmountValueProps>`
  font-size: ${({ compact }) => (compact ? '3rem' : '4rem')};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

export const PerUser = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};
`;

interface PopularTag {
  visible: boolean;
}

export const PopularTag = styled.span<PopularTag>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 20px;
  width: 120px;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};

  &:after {
    content: 'Popular';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 85px;
    font-size: ${({ theme }) => theme.fontSize.body.md};
  }
`;

export const BodyCard = styled.ul`
  padding: 0rem 3rem;
  width: 100%;
`;

interface BenefitItemProps {
  compact: boolean;
}

export const BenefitItem = styled.li<BenefitItemProps>`
  margin-bottom: ${({ compact }) => (compact ? '2rem' : '3rem')};
  display: flex;
  align-items: center;
`;

export const CheckIcon = styled(MdCheck).attrs(({ theme }) => {
  return {
    size: 24,
    color: theme.colors.white,
  };
})`
  min-width: 24px;
`;

interface BenefitLabelProps {
  compact: boolean;
}

export const BenefitLabel = styled.span<BenefitLabelProps>`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.body.md};
  }
`;

interface ChoosePlanButtonProps {
  compact: boolean;
}

export const ChoosePlanButton = styled.button<ChoosePlanButtonProps>`
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  margin-top: ${({ compact }) => (compact ? '1rem' : '2rem')};
  color: ${({ theme }) => theme.colors.white};
  height: 60px;
  width: auto;
  padding: 1rem 2rem;
  margin: 3rem 0rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: filter 0.2s ease;

  &:active {
    filter: brightness(88%);
  }
`;

export const ButtonIcon = styled(MdArrowForward)`
  margin-left: 1rem;
`;
