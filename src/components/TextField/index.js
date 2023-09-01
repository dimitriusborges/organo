//React elements must start with Uppercase
import './TextField.css'

const TextField = (props) => {
    return (
        <div className="textField">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField