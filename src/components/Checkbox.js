import React, { useState, useEffect } from 'react'
import { CheckboxContainer } from 'elements'

const Checkbox = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    const newState = !checked
    setChecked(newState)
    onChange(newState)
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <CheckboxContainer>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
    </CheckboxContainer>
  )
}

export default Checkbox
