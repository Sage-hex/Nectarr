import "./Button.css"

const Button = ({children}) => {


    return(
      <button className="Button Button-custom">{children}</button>
    )
  }
  
  export default Button;