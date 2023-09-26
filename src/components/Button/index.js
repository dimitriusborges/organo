import  "./Button.css"

const Button = (props) =>{

    //props.children gets all the component children, defined where the component is used
    return (
        <button className="button">
            {props.children}
        </button>
    )
}

export default Button