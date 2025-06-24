import {useState} from 'react'

import {myStyles} from '../AppTextInput.style'
import {useColor} from '@/hooks'

const useAppTextInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const colors = useColor()
  const styles = myStyles(colors)

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return {colors, styles, showPassword, setShowPassword, onToggleShowPassword}
}

export default useAppTextInput
