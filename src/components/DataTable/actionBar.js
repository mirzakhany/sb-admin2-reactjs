import React, {useState} from "react";

const ActionBar = props => {

    const {onAction, className,selectClassName, btnClassName, actions, id} = props;
    const [value, setValue] = useState("none")

    const handleAction = () => {
        onAction(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (

        <div id={id} className={className} aria-controls="dataTable">
            <label>Actions:
                <select className={selectClassName} value={value} onChange={handleChange}>
                    <option value="none" selected="">-------</option>
                    {actions.map(a =>(
                        <option value={a.retValue}>{a.text}</option>
                    ))}
                </select>
                <a className={btnClassName} role="button" onClick={() => handleAction()} href="#">Go</a>
            </label>
        </div>
    )
}

export default ActionBar;