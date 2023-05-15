import './Button.css'
import { Circle } from '@chakra-ui/react'

export const Button = ({ text, onClick }) => (
    <Circle className="button" onClick={onClick}>
        {text}
    </Circle>);

