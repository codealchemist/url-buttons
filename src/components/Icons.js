import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsToggleOff } from 'react-icons/bs'
import { BsToggleOn } from 'react-icons/bs'
import { FiVideo } from 'react-icons/fi'
import { FiVideoOff } from 'react-icons/fi'

export const iconsOn = {
  FaLightbulb: <FaLightbulb />,
  BsToggleOn: <BsToggleOn />,
  FiVideo: <FiVideo />
}

export const iconsOff = {
  FaLightbulb: <FaRegLightbulb />,
  BsToggleOn: <BsToggleOff />,
  FiVideo: <FiVideoOff />
}

export default iconsOn
