import React from "react";

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkBoxes: {},
            columnDefs: props.columnDefs
        }
    }

    checkAllRows = (event) => {
        let newStatue = {};
        this.props.items.map(item => (newStatue[item[this.props.keyField]] = event.target.checked))
        this.setState({checkBoxes: newStatue})
        if (this.props.onSelectionChange ) {
            this.props.onSelectionChange(newStatue)
        }
    }

    checkOneRow = (event) => {
        let currentStatus = this.state.checkBoxes;
        currentStatus[event.target.dataset.key] = event.target.checked;
        this.setState({checkBoxes: currentStatus})
        if (this.props.onSelectionChange ) {
            this.props.onSelectionChange(currentStatus)
        }
    }

    renderHeader() {

        const chkCol = this.props.showCheckBoxes ? (
            <th className="action-checkbox-column">
                <input type="checkbox" id="table-action-checkbox" onChange={this.checkAllRows}/>
            </th>
        ) : null

        return (
            <thead>
            <tr>
                {chkCol}
                {this.state.columnDefs.map(col => (
                    <th key={col.field}>{col.headerName}</th>
                ))}
            </tr>
            </thead>
        )
    }

    renderBody() {
        return (
            <tbody>
            {this.props.items.map(dataItem => (
                <tr key={dataItem[this.props.keyField]}>
                    {this.props.showCheckBoxes &&
                        <td>
                            <input data-key={dataItem[this.props.keyField]} type="checkbox"
                                   className="row-checkbox"
                                   onChange={this.checkOneRow}
                                   checked={this.state.checkBoxes[dataItem[this.props.keyField]] || false ? 'checked': null}/>
                        </td>
                    }
                    {this.state.columnDefs.map(col => (
                        <td key={col.field}>{dataItem[col.field]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        )
    }

    renderMsg(message) {
        return (
            <table className="table my-0" id="dataTable">
                {this.renderHeader()}
                <tbody>
                <tr>
                    <td colSpan={this.state.columnDefs.length}>{message}</td>
                </tr>
                </tbody>
            </table>
        )
    }

    render() {
        const chkCol = this.props.showCheckBoxes ? <td></td> : null
        if (!this.props.isLoading) {
            return (
                this.renderMsg("Loading ...")
            )
        } else {
            if (this.props.items.length === 0){
                return (
                    this.renderMsg("No data")
                )
            }
            return (
                <table className="table my-0" id="dataTable">
                    {this.renderHeader()}
                    {this.renderBody()}
                    <tfoot>
                    <tr>
                        {chkCol}
                        {this.state.columnDefs.map(col => (
                            <th key={col.field}>{col.headerName}</th>
                        ))}
                    </tr>
                    </tfoot>
                </table>
            )
        }
    }
}

export default DataTable;