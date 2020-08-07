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
                    <option key={"none"} value="none">-------</option>
                    {actions.map(a =>(
                        <option key={a.retValue} value={a.retValue}>{a.text}</option>
                    ))}
                </select>
                <button className={btnClassName} onClick={() => handleAction()}>Go</button>
            </label>
        </div>
    )
}

export default ActionBar;