import React, {useState} from "react";

const DataTable = props => {

    const {items, columnDefs, keyField, showCheckBoxes, onSelectionChange, onRowClick, isLoading} = props
    const [checkBoxes, setCheckBoxes] = useState({})

    const checkAllRows = (event) => {
        let newStatue = {};
        items.map(item => (newStatue[item[keyField]] = event.target.checked))
        setCheckBoxes(newStatue)
        if (onSelectionChange) {
            onSelectionChange(newStatue)
        }
    }

    const checkOneRow = (event) => {
        let currentStatus = checkBoxes;
        currentStatus[event.target.dataset.key] = event.target.checked;
        setCheckBoxes(currentStatus)
        if (onSelectionChange ) {
            onSelectionChange(currentStatus)
        }
    }

    const onRowClickHandler = (key) => {
        onRowClick(key)
    }

    const renderHeader = () =>{

        const chkCol = showCheckBoxes ? (
            <th className="action-checkbox-column">
                <input type="checkbox" id="table-action-checkbox" onChange={checkAllRows}/>
            </th>
        ) : null

        return (
            <thead>
            <tr>
                {chkCol}
                {columnDefs.map(col => (
                    <th key={col.field}>{col.headerName}</th>
                ))}
            </tr>
            </thead>
        )
    }

    const renderBody = () =>{
        return (
            <tbody>
            {items.map(dataItem => (
                <tr key={dataItem[keyField]}>
                    {showCheckBoxes &&
                        <td>
                            <input data-key={dataItem[keyField]} type="checkbox"
                                   className="row-checkbox"
                                   onChange={checkOneRow}
                                   checked={checkBoxes[dataItem[keyField]] || false ? 'checked': null}/>
                        </td>
                    }
                    {columnDefs.map(col => (
                        <td key={col.field} onClick={() => onRowClickHandler(dataItem[keyField])}>{dataItem[col.field]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        )
    }

    const renderMsg = (message) => {
        return (
            <table className="table my-0" id="dataTable">
                {renderHeader()}
                <tbody>
                <tr>
                    <td colSpan={columnDefs.length}>{message}</td>
                </tr>
                </tbody>
            </table>
        )
    }

    const chkCol = showCheckBoxes ? <td></td> : null
    if (!isLoading) {
        return (
            renderMsg("Loading ...")
        )
    } else {
        if (items.length === 0){
            return (
                renderMsg("No data")
            )
        }
        return (
            <table className="table my-0" id="dataTable">
                {renderHeader()}
                {renderBody()}
                <tfoot>
                <tr>
                    {chkCol}
                    {columnDefs.map(col => (
                        <th key={col.field}>{col.headerName}</th>
                    ))}
                </tr>
                </tfoot>
            </table>
        )
    }
}

export default DataTable;