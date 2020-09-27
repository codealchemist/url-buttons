import React, { useState, useGlobal, useDispatch } from 'reactn'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'themes/GlobalStyles'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { GiCancel } from 'react-icons/gi'
import {
  PageContainer,
  PageContent,
  Pad,
  ButtonName,
  FixedButtonsContainer,
  Iframe,
  BottomRight
} from 'elements'
import NewButtonModal from 'components/NewButtonModal'
import Button from 'components/Button'
import { iconsOn, iconsOff } from 'components/Icons'
import SystemMessage from 'components/SystemMessage'
import theme from 'themes/dark'
import 'state'

const App = () => {
  const saveState = useDispatch('saveState')
  const [state, setState] = useGlobal()
  const [systemMessage, setSystemMessage] = useGlobal('systemMessage')
  const [isNewButtonModalOpen, setIsNewButtonModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedButton, setSelectedButton] = useState()
  const [selectedIndex, setSelectedIndex] = useState()
  const [iframeSrc, setIframeSrc] = useState()

  const openNewButtonModal = () => {
    setIsNewButtonModalOpen(true)
  }

  const closeNewButtonModal = () => {
    setIsNewButtonModalOpen(false)
  }

  const addButton = (button) => {
    console.log('BUTTON ADDED', button)

    saveState({
      ...state,
      buttons: [...state.buttons, button]
    })
  }

  const updateButton = (button) => {
    console.log('BUTTON UPDATED', button)

    const updatedButtons = [...state.buttons]
    updatedButtons[selectedIndex] = button
    saveState({
      ...state,
      buttons: updatedButtons
    })
  }

  const onButtonAdded = (button) => {
    closeNewButtonModal()
    if (isEditMode) return updateButton(button)
    addButton(button)
  }

  const setButtonLoading = (name) => {
    setState({
      ...state,
      buttons: state.buttons.map((button) => {
        if (button.name === name) {
          return {
            ...button,
            isLoading: !button.isLoading
          }
        }
        return button
      })
    })
  }

  const onButtonAction = async (button, index) => {
    if (isEditMode) {
      setSelectedButton(button)
      setSelectedIndex(index)
      openNewButtonModal()
      return
    }

    const {
      name,
      url,
      buttonState,
      openInNewWindow,
      closeOpenedWindow,
      openInIframe,
      displayResponse
    } = button
    setButtonLoading(name)
    // TODO: add checkbox to button form to support not showing errors.

    try {
      if (openInNewWindow) {
        const win = window.open(url, name)
        if (!closeOpenedWindow) return
        setTimeout(() => {
          win.close()
        }, 3000)
      } else {
        if (openInIframe) {
          setIframeSrc(url)
        } else {
          const result = await fetch(url, { mode: 'no-cors' })
          const data = await result.json()
          console.log('RESPONSE', data)

          if (displayResponse) {
            // TODO: Better response display.
            setSystemMessage({
              text: (
                <>
                  Button action response for &nbsp;
                  <b>"{name}"</b>:&nbsp;<code>{JSON.stringify(data)}</code>
                </>
              ),
              type: 'success'
            })
          }
        }
      }
    } catch (error) {
      console.log('BUTTON ACTION ERROR', error)
      setSystemMessage({
        text: (
          <>
            Button action failed for &nbsp;
            <b>"{name}"</b>.
          </>
        ),
        type: 'error'
      })
      setButtonLoading(name)
      return
    }

    saveState({
      ...state,
      buttons: state.buttons.map((button) => {
        if (button.name === name) {
          return {
            ...button,
            buttonState: !buttonState,
            isLoading: false
          }
        }
        return button
      })
    })
  }

  const onDelete = (button) => {
    console.log('DELETE button', button)
    const updatedButtons = state.buttons.filter(
      (currentButton, index) => selectedIndex !== index
    )
    saveState({
      ...state,
      buttons: updatedButtons
    })
    closeNewButtonModal()
  }

  const enterEditMode = () => {
    setIsEditMode(true)
  }

  const exitEditMode = () => {
    setIsEditMode(false)
  }

  const closeIframe = () => {
    setIframeSrc()
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SystemMessage />
      <PageContainer isEditMode={isEditMode}>
        <PageContent>
          {state.buttons.map((button, index) => (
            <Pad key={button.name}>
              <Button
                iconOn={iconsOn[button.icon]}
                iconOff={iconsOff[button.icon]}
                state={button.buttonState}
                isLoading={button.isLoading}
                onClick={() => onButtonAction(button, index)}
              >
                <ButtonName>{button.name}</ButtonName>
              </Button>
            </Pad>
          ))}

          {iframeSrc && (
            <>
              <BottomRight>
                <Button secondary icon={<GiCancel />} onClick={closeIframe} />
              </BottomRight>
              <Iframe src={iframeSrc} frameborder="0" />
            </>
          )}

          <NewButtonModal
            isOpen={isNewButtonModalOpen}
            onCancel={closeNewButtonModal}
            onAdd={onButtonAdded}
            button={selectedButton}
            isEditMode={isEditMode}
            onDelete={onDelete}
          />
        </PageContent>

        <FixedButtonsContainer>
          {!isEditMode && (
            <>
              <Pad>
                <Button
                  primary
                  icon={<AiOutlinePlusCircle />}
                  onClick={openNewButtonModal}
                />
              </Pad>
              <Pad>
                <Button
                  secondary
                  icon={<MdModeEdit />}
                  onClick={enterEditMode}
                />
              </Pad>
            </>
          )}

          {isEditMode && (
            <Pad>
              <Button secondary icon={<GiCancel />} onClick={exitEditMode} />
            </Pad>
          )}
        </FixedButtonsContainer>
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
