import styled, { css } from 'styled-components';

import { MdCheck, MdArrowForward } from 'react-icons/md';

interface ContainerProps {
  compact: boolean;
}

const leftCardBorderStyle = css`
  border-top: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-left: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
`;

const rightCardBorderStyle = css`
  border-top: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-left: 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
`;

const leftCardBorderStyleOnHover = css`
  border-top: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-left: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary}; ;
`;

const rightCardBorderStyleOnHover = css`
  border-top: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-right: 3px solid ${({ theme }) => theme.colors.tertiary};
  border-left: 0;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary};
`;

const middleCardBorderStyle = css`
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
`;

export const Container = styled.li<ContainerProps>`
  height: ${({ compact }) => (compact ? '429px' : '499px')};
  background-color: ${({ compact, theme }) => (compact ? theme.colors['light-gray'] : theme.colors.black)};
  width: ${({ compact }) => (compact ? '400px' : '460px')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: border-width 0.1s ease-in-out;

  ${middleCardBorderStyle};

  &:nth-child(1) {
    border-radius: 20px 0 0 20px;
    ${({ compact }) => compact && leftCardBorderStyle}

    &:hover {
      ${leftCardBorderStyleOnHover}
    }
  }

  &:nth-child(3) {
    border-radius: 0 20px 20px 0;
    ${({ compact }) => compact && rightCardBorderStyle}

    &:hover {
      ${rightCardBorderStyleOnHover}
    }
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;
  display: flex;
  align-items: center;
`;

export const PlanHeaderInfo = styled.section`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

interface PlanNameProps {
  compact: boolean;
}

export const PlanName = styled.span<PlanNameProps>`
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, compact }) => (compact ? theme.colors.black : theme.colors.white)};
  font-weight: bold;
`;

export const Amount = styled.strong`
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors['black-400']};
  margin-top: 1rem;
`;

interface AmountValueProps {
  compact: boolean;
}

export const AmountValue = styled.span<AmountValueProps>`
  font-size: ${({ compact }) => (compact ? '3rem' : '4rem')};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, compact }) => (compact ? theme.colors.black : theme.colors.white)};
`;

export const PerUser = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors['black-400']};
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

export const Icon = styled(MdCheck)``;

interface BenefitLabelProps {
  compact: boolean;
}

export const BenefitLabel = styled.span<BenefitLabelProps>`
  margin-left: 1rem;
  font-size: ${({ theme, compact }) => (compact ? theme.fontSize.body.lg : theme.fontSize.body.xl)};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, compact }) => (compact ? theme.colors['black-400'] : theme.colors.white)};
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
  height: 70px;
  width: auto;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled(MdArrowForward)`
  margin-left: 1rem;
`;
