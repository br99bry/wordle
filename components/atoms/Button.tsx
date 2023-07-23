import { useRef } from "react"

const Button = ({ children, handleClick }) => {
  const button = useRef(null)
  const handleIntermediateClick = (e) => {
    console.log('')
    button.current.blur()
    handleClick(e)
  }
  return (
    <button onClick={handleIntermediateClick} ref={button}>{children}</button>
  )
}

export default Button
