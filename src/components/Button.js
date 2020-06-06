import React from 'react'
import { StyledButton } from 'elements'

const ButtonComponent = ({
  children,
  icon,
  iconOn,
  iconOff,
  onClick,
  primary,
  secondary,
  tertiary,
  state,
  isLoading
}) => {
  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      isLoading={isLoading}
    >
      {iconOn && state && iconOn}
      {iconOff && !state && iconOff}
      {!iconOn && !iconOff && icon && icon}
      {children}
    </StyledButton>
  )
}

export default ButtonComponent
