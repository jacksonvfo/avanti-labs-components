import React from "react"
import { IconType } from 'react-icons'

type stylesOptions = 'primary' | 'secundary'
type sizesOptions = 'default' | 'large' | 'small'
type iconOptions = {
  gapInPx?: number, 
  icon: IconType,  
  iconPosition?: 'left' | 'right', 
}

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  buttonStyle: stylesOptions
  buttonSize: sizesOptions
  iconOptions?: iconOptions
} 

const Button: React.FC<ButtonProps> = ({children, className}) => {

  return (
    <button className={className} onClick={() => alert('its me')}>
      {children}
    </button>
  )

}

export default Button