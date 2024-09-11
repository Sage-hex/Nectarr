import "./Button.css"

const Button = ({children, onClick}) => {


    return(
      <button className="Button Button-custom" onClick={onClick}>{children}</button>
    )
  }
  
  export default Button;