import "./SelectionList.css"


const SelectionList = (props) => {


    return (
        <div className="selectionList">
            <label>{props.label}</label>
            <select onChange={evt => props.onChanging(evt.target.value)} required={props.required} value={props.val}>
                <option value=""/>
                {
                    props.items.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default SelectionList