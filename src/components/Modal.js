import React from 'react'
import {
  ModalContainer,
  ModalTitle,
  ModalButtonsContainer,
  ModalButton
} from 'elements'

const Modal = ({
  children,
  title,
  okButtonText,
  cancelButtonText,
  onOk,
  onCancel,
  isOpen,
  hideOk,
  hideCancel,
  z,
  direction,
  isBlured
}) => {
  okButtonText = okButtonText || 'OK'
  cancelButtonText = cancelButtonText || 'Cancel'

  return (
    <ModalContainer
      isOpen={isOpen}
      z={z}
      direction={direction}
      isBlured={isBlured}
    >
      {title && <ModalTitle>{title}</ModalTitle>}
      {children}

      <ModalButtonsContainer>
        {!hideOk && (
          <ModalButton primary onClick={onOk} fullWidth={hideCancel}>
            {okButtonText}
          </ModalButton>
        )}
        {!hideCancel && (
          <ModalButton secondary onClick={onCancel} fullWidth={hideOk}>
            {cancelButtonText}
          </ModalButton>
        )}
      </ModalButtonsContainer>
    </ModalContainer>
  )
}

export default Modal
