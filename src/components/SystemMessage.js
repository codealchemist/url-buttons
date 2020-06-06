import React, { useGlobal, useEffect } from 'reactn'
import { StyledSystemMessage } from 'elements'

const timeoutSeconds = 5

const SystemMessage = () => {
  const [systemMessage, setSystemMessage] = useGlobal('systemMessage')

  useEffect(() => {
    if (!systemMessage) return

    setTimeout(() => {
      setSystemMessage()
    }, timeoutSeconds * 1000)
  }, [systemMessage])

  return (
    <>
      {systemMessage && (
        <StyledSystemMessage type={systemMessage.type} isOpen={!!systemMessage}>
          {systemMessage.text}
        </StyledSystemMessage>
      )}
    </>
  )
}

export default SystemMessage
