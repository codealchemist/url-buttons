import React, { useState, useEffect } from 'react'
import Modal from 'components/Modal'
import { Pad, TextButton } from 'elements'
import Button from 'components/Button'
import IconSelector from 'components/IconSelector'
import Checkbox from 'components/Checkbox'
import icons from 'components/Icons'

const NewButtonModal = ({
  isOpen,
  onCancel,
  onAdd,
  onDelete,
  button,
  isEditMode
}) => {
  const [isIconSelectorOpen, setIsIconSelectorOpen] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [title, setTitle] = useState('New button')
  const [state, setState] = useState({
    name: '',
    url: '',
    icon: 'FaLightbulb',
    openInNewWindow: false,
    closeOpenedWindow: false,
    displayResponse: false,
    displayRequestErrors: false
  })

  const onChange = ({ target: { value, name } }) => {
    setState({
      ...state,
      [name]: value
    })
    setIsValid(!!state.url.trim() && !!state.name.trim())
  }

  const onOk = () => {
    onAdd({
      ...state,
      buttonState: false
    })
  }

  const openIconSelector = () => {
    setIsIconSelectorOpen(true)
  }

  const closeIconSelector = () => {
    setIsIconSelectorOpen(false)
  }

  const onIconSelected = (icon) => {
    console.log('ICON selected', icon)
    setState({
      ...state,
      icon
    })
    closeIconSelector()
  }

  const onDeleteClick = () => {
    if (!window.confirm('Are you sure?')) return
    onDelete(button)
  }

  const onCheckboxChange = ({ name, checked }) => {
    console.log('checkbox change', { name, checked })
    setState({
      ...state,
      [name]: checked
    })
  }

  useEffect(() => {
    console.log('EDIT BUTTON', button)
    setState({
      ...state,
      ...button
    })
    setIsValid(true)
  }, [button])

  useEffect(() => {
    if (isEditMode) {
      setTitle('Update button')
    } else {
      setTitle('New button')
    }
  }, [isEditMode])

  return (
    <Modal
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      isOpen={isOpen}
      isValid={state.isValid}
    >
      <Pad size="10">
        <Button icon={icons[state.icon]} onClick={openIconSelector} />
      </Pad>

      <Pad>
        <input
          placeholder="Button name"
          name="name"
          id="name"
          onChange={onChange}
          value={state.name}
        />
      </Pad>

      <Pad>
        <input
          placeholder="URL"
          name="url"
          id="url"
          onChange={onChange}
          value={state.url}
        />
      </Pad>

      <Pad>
        <Checkbox
          label="Open in new window"
          isChecked={state.openInNewWindow}
          onChange={(checked) =>
            onCheckboxChange({ name: 'openInNewWindow', checked })
          }
        />
      </Pad>

      <Pad>
        <Checkbox
          label="Close opened window"
          isChecked={state.closeOpenedWindow}
          onChange={(checked) =>
            onCheckboxChange({ name: 'closeOpenedWindow', checked })
          }
        />
      </Pad>

      <Pad>
        <Checkbox
          label="Display response"
          isChecked={state.displayResponse}
          onChange={(checked) =>
            onCheckboxChange({ name: 'displayResponse', checked })
          }
        />
      </Pad>

      <Pad>
        <Checkbox
          label="Display request errors"
          isChecked={state.displayRequestErrors}
          onChange={(checked) =>
            onCheckboxChange({ name: 'displayRequestErrors', checked })
          }
        />
      </Pad>

      {isEditMode && (
        <Pad size="40">
          <TextButton onClick={onDeleteClick}>Delete</TextButton>
        </Pad>
      )}

      <IconSelector
        isOpen={isIconSelectorOpen}
        onSelect={onIconSelected}
        onCancel={closeIconSelector}
      />
    </Modal>
  )
}

export default NewButtonModal
