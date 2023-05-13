import './Button.css'
// import { Button, ButtonGroup } from '@chakra-ui/react'

export const Button = ({ text, onClick }) =>
    <Button className="button" onClick={onClick}>
        {text}
    </Button>;
