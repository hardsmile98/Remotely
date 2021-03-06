/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';
import { COLORS, FONTS } from 'mytheme/theme';

interface IVariant {
  variant: 'outlined' | 'fill'
  fullWidth: boolean,
}

const ButtonBox = styled.button<IVariant>`
  background-color:
    ${(props) => (props.variant === 'fill' ? COLORS.PRIMARY : COLORS.WHITE)};
  color:
    ${(props) => (props.variant === 'fill' ? COLORS.WHITE : COLORS.PRIMARY)};
  border:
    ${(props) => (props.variant === 'fill' ? '1px solid transparent' : `1px solid ${COLORS.PRIMARY}`)};
  font-size: ${FONTS.small};
  border-radius: 10px;
  font-weight: bold;
  padding: 10px 20px;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  :hover{
    background-color: 
      ${(props) => (props.variant === 'fill' ? COLORS.PRIMARY_HOVER : COLORS.WHITE_HOVER)};
  }
`;

type Props = {
  children: React.ReactNode;
  onClick: ()=> void,
  variant?: 'outlined' | 'fill',
  fullWidth?: boolean,
};

function Button({
  children, onClick, variant = 'fill', fullWidth = false,
}: Props) {
  return (
    <ButtonBox
      type="button"
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonBox>
  );
}

export default Button;
