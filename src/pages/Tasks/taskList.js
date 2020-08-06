import React from 'react';
import {Link} from "react-router-dom";
import {DataTable , Paginator, ActionBar, SearchInput} from "../../components";

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allChecked: false,
            items: [],
            paginatedItems: [],
            tableCols: [
                { headerName: "Title", field: "title" },
                { headerName: "Sprint", field: "sprint" },
                { headerName: "Estimate", field: "estimate" },
                { headerName: "Status", field: "status" },
                { headerName: "Assignee", field: "assignee" },
            ],
            actionLists: [
                { text: "Delete Selected", retValue: "delete-selected"}
            ]
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/tasks")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handlePageChange = (pageData) => {
        this.setState({paginatedItems: pageData});
    }

    handleAction = (action) => {
        console.log("selected item:", action)
    }

    handleSelectionChange = (selectedItems) => {
        console.log('selected', selectedItems)
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3 className="text-dark mb-4">Tasks</h3>
                    </div>
                    <div className="col text-right">
                        <Link className="btn btn-primary" role="button" to="/tasks/create">Add Task</Link>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 font-weight-bold">Tasks info</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 text-nowrap">
                                <ActionBar
                                    id={"dataTable_length"}
                                    className={"dataTables_length"}
                                    selectClassName={"form-control form-control-sm custom-select custom-select-sm"}
                                    btnClassName={"btn btn-primary btn-sm m-lg-2"}
                                    actions={this.state.actionLists}
                                    onAction={this.handleAction}
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="text-md-right dataTables_filter" id="dataTable_filter">
                                    <label>
                                        <SearchInput
                                            className="form-control form-control-sm"
                                            placeHolder="Search"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive table mt-2" id="dataTable" role="grid"
                             aria-describedby="dataTable_info">
                            <DataTable
                                items={this.state.paginatedItems}
                                isLoading={this.state.isLoaded}
                                columnDefs={this.state.tableCols}
                                showCheckBoxes={true}
                                onSelectionChange={this.handleSelectionChange}
                                keyField="id"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p id="dataTable_info" className="dataTables_info" role="status"
                                   aria-live="polite">Showing 1 to 10 of 27</p>
                            </div>
                            <div className="col-md-6">
                                <Paginator items={this.state.items} perPage={10} onPageChange={this.handlePageChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;