
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<ButtonProps>   = ({handleClick})  => {
  return(
    <button type ="button" name ="clickMe" onClick={handleClick}>Click Me</button>
  )
}

export default Button;