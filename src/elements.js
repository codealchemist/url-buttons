import styled from 'styled-components'
import Button from 'components/Button'
import theme from 'themes'

export const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 10px 0 10px;
  height: 100vh;

  ${({ isEditMode }) => {
    let output = ''
    if (isEditMode)
      output += `
        background: ${theme.highlightAlt300};
      `
    return output
  }}
`

export const PageContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100% - 10vh - 10px);

  @media screen and (orientation: landscape) and (min-width: 800px) {
    height: calc(100% - 10vh - 10px);
    font-size: 3.5vh;
  }

  @media screen and (orientation: landscape) and (min-width: 300px) and (max-width: 800px) {
    height: calc(100% - 20vh - 10px);
    font-size: 7vh;
  }
`

export const StyledButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vh;
  height: 10vh;
  font-size: 7vw;
  border-radius: 10px;
  background: ${theme.background300};
  color: ${theme.highlight100};

  path,
  polyline {
    stroke: ${theme.highlight100};
  }

  :hover {
    background: ${theme.background200};
    border: 1px solid ${theme.highlight100};
    cursor: pointer;

    svg {
      filter: blur(1px);
    }

    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  }

  ${({ primary, secondary, tertiary, isLoading }) => {
    let output = ''
    if (primary)
      output += `
        color: ${theme.foreground50};
        background: ${theme.highlight400};

        :hover {
          background: ${theme.highlight300};
        }
      `
    if (secondary)
      output += `
        color: ${theme.foreground50};
        background: ${theme.highlightAlt400};

        :hover {
          background: ${theme.highlightAlt300};
        }
      `
    if (tertiary)
      output += `
      color: ${theme.highlight200};

      :hover {
          background: ${theme.highlight100};
        }
    `
    if (isLoading)
      output += `
        pointer-events: none;
        filter: blur(2px);
    `
    return output
  }}

  @media screen and (orientation: landscape) and (min-width: 800px) {
    width: 10vh;
    height: 10vh;
    font-size: 3.5vh;
  }

  @media screen and (orientation: landscape) and (min-width: 300px) and (max-width: 800px) {
    width: 20vh;
    height: 20vh;
    font-size: 7vh;
  }
`

export const ButtonName = styled.div`
  position: absolute;
  bottom: 5px;
  padding-left: 5px;
  font-size: 2.5vw;
  color: ${theme.foreground50};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (orientation: landscape) and (min-width: 800px) {
    font-size: 1.5vh;
  }

  @media screen and (orientation: landscape) and (min-width: 300px) and (max-width: 800px) {
    font-size: 3.5vh;
  }
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: -100vw;
  background: ${theme.background200};
  color: ${theme.foreground100};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease;
  z-index: 20;

  ${({ isOpen, z, direction, isBlured }) => {
    let output = ''
    if (isOpen) output += `left: 0;`
    if (z) output += `z-index: ${z};`
    if (direction) output += `flex-direction: ${direction};`
    if (isBlured) output += `filter: blur(3px);`
    return output
  }}
`

export const ModalTitle = styled.div`
  width: 100%;
  height: 10vh;
  background: ${theme.background400};
  color: ${theme.foreground50};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
`

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`

export const ModalButtonsContainer = styled.div`
  background: ${theme.background300};
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
`

export const ModalButton = styled.div`
  width: 50%;
  height: 10vh;
  background: ${theme.background400};
  color: ${theme.highlight50};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background: ${theme.background400};
  }

  ${({ primary, secondary, tertiary, fullWidth }) => {
    let output = ''
    if (primary)
      output += `
        color: ${theme.foreground50};
        background: ${theme.highlight400};
      `
    if (secondary)
      output += `
        color: ${theme.foreground50};
        background: ${theme.highlightAlt400};
      `
    if (tertiary) output += `color: ${theme.highlight200};`
    if (fullWidth) output += `width: 100%;`
    return output
  }}
`

export const Pad = styled.div`
  padding: 5px;

  ${({ size }) => {
    let output = ''
    if (size) output = `padding: ${size}px;`
    return output
  }}
`

export const StyledSystemMessage = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  padding: 10px;
  background: ${theme.background400};
  color: ${theme.foreground100};
  bottom: -100vh;
  transition: all 0.5 ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  z-index: 100;

  ${({ type, isOpen }) => {
    let output = ''
    if (type === 'success')
      output += `
      background: ${theme.highlight200};
      color: ${theme.foreground50};
    `
    if (type === 'warning')
      output += `
      background: ${theme.background50};
      color: ${theme.foreground50};
    `
    if (type === 'error')
      output += `
      background: ${theme.highlightAlt200};
      color: ${theme.foreground50};
    `
    if (isOpen) output += `bottom: 0;`
    return output
  }}
`

export const FixedButtonsContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  background: ${theme.background400};
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TextButton = styled.div`
  padding: 15px;
  border: 1px solid ${theme.background100};
  border-radius: 5px;
  background: ${theme.highlightAlt400};
  color: ${theme.foreground50};
  cursor: pointer;
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90vw;

  label {
    display: flex;
    align-items: center;
  }

  input {
    width: 5vw;
    height: 5vw;
  }
`

export const FocusedInput = styled.div`
  opacity: 0;
  visibility: hidden;

  ${({ isFocused }) => {
    let output = ''
    if (isFocused)
      output += `
        position: fixed;
        top: 0;
        left: 0;
        background: black;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        visibility: visible;
        z-index: 110;
    `
    return output
  }}
`

export const Iframe = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  border: 0;
`

export const TopRight = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 210;
`

export const BottomRight = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  z-index: 210;
`
