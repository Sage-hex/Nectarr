import "./Button.css"

const Button = ({ children, onClick }) => {

    // const Button = ({ 
    //     children, 
    //     onClick, 
    //     className = '', 
    //     type = 'button', 
    //     disabled = false 
    // }) => {
    //     return (
    //         <button 
    //             className={`Button ${className}`} 
    //             onClick={onClick} 
    //             type={type} 
    //             disabled={disabled}
    //         >
    //             {children}
    //         </button>
    //     );
    // };

    // export default Button;



    return (
        <button className="Button Button-custom" onClick={onClick}>{children}</button>
    )
}

export default Button;