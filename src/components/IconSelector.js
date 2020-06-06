import React, { useState } from 'react'
import Modal from 'components/Modal'
import Button from 'components/Button'
import icons from 'components/Icons'
import { Pad } from 'elements'

const IconSelector = ({ isOpen, onSelect, onCancel }) => {
  const onClick = (icon) => {
    onSelect(icon)
  }

  return (
    <Modal
      title="Select icon"
      isOpen={isOpen}
      onCancel={onCancel}
      hideOk={true}
      direction="row"
      z={30}
    >
      {Object.entries(icons).map(([name, Icon]) => (
        <Pad key={name}>
          <Button icon={Icon} onClick={() => onClick(name)} />
        </Pad>
      ))}
    </Modal>
  )
}

export default IconSelector
