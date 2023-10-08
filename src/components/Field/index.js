//React elements must start with Uppercase
import './Field.css'

/*all react components receives a default, optional readonly argument which can carry a set of values, here called
"props". So, while calling this component, you can share any number of arguments and all of them will be part of
props as props.<arg_name_1>, props.<arg_name_2> etc.
The name props is a convention, you can use any name you wish
*/
const TextField = (props) => {

    const fieldType = props.type ? props.type : 'text'

    const onTyping = (evt) => {
        props.onChanging(evt.target.value)
    }

    return (
        <div className={`field field-${fieldType}`}>
            <label>{props.label}</label>
            <input type={fieldType}
                value={props.val}
                   onChange={onTyping}
                   required={props.required}
                   placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextField