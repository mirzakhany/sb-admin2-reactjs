import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useToasts } from 'react-toast-notifications'
import axios from 'axios'
import {DataTable, Paginator, ActionBar, SearchInput} from "components";
import {configs} from 'services/Network/configs';

const TaskList = props => {

    const {history} = props;
    const { addToast } = useToasts()
    const TASKS_URL = configs.API_URL + "/tasks"

    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [paginatedItems, setPaginatedItems] = useState({
        currentPage: 1,
        fromItem: 1,
        toItem: 10,
        totalItems: 1,
        items: [],
    });

    const [searchResults, setSearchResults] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const searchOptions = {
        includeScore: true,
        keys: ['title', 'sprint', 'assignee'],
        threshold: 0.4,
        distance: 35,
    }

    const tableCols = [
        {headerName: "Title", field: "title"},
        {headerName: "Sprint", field: "sprint"},
        {headerName: "Estimate", field: "estimate"},
        {headerName: "Status", field: "status"},
        {headerName: "Assignee", field: "assignee"},
    ]

    const actionLists = [
        {text: "Delete Selected", retValue: "delete-selected"}
    ]

    const getTasks = () => {
        return axios.get(TASKS_URL)
    }

    useEffect(() => {
        getTasks().then(
            (result) => {
                setItems(result.data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                addToast(error.message, {appearance: 'error'})
            }
        )
    }, [])

    const onRowClick = (selectedItem) => {
        history.push('/tasks/edit/' + selectedItem);
    }

    const handlePageChange = (pageData) => {
        setPaginatedItems(pageData)
    }

    const handleSearch = (result) => {
        setSearchResults(result)
    }

    const handleAction = (action) => {
        console.log("selected item:", action)
    }

    const handleSelectionChange = (selectedItems) => {
        setSelectedItems(selectedItems)
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h3 className="text-dark mb-4">Tasks</h3>
                </div>
                <div className="col text-right">
                    <Link className="btn btn-primary" role="button" to="/tasks/edit">Add Task</Link>
                </div>
            </div>
            <div className="card shadow">
                <div className="card-header py-3">
                    <div className="text-primary m-0 font-weight-bold">Tasks list
                        {!isLoaded && (
                            <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        )
                        }
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 text-nowrap">
                            <ActionBar
                                id={"dataTable_length"}
                                className={"dataTables_length"}
                                selectClassName={"form-control form-control-sm custom-select custom-select-sm"}
                                btnClassName={"btn btn-primary btn-sm m-lg-2"}
                                actions={actionLists}
                                onAction={handleAction}
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="text-md-right dataTables_filter" id="dataTable_filter">
                                <label>
                                    <SearchInput
                                        className="form-control form-control-sm"
                                        placeHolder="Search"
                                        searchOptions={searchOptions}
                                        items={items}
                                        onSearch={handleSearch}
                                        searchThreshold={3}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive table mt-2" id="dataTable" role="grid"
                         aria-describedby="dataTable_info">
                        <DataTable
                            items={paginatedItems.items}
                            isLoading={isLoaded}
                            columnDefs={tableCols}
                            showCheckBoxes={true}
                            onSelectionChange={handleSelectionChange}
                            keyField="id"
                            onRowClick={onRowClick}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p id="dataTable_info" className="dataTables_info" role="status"
                               aria-live="polite">Showing {paginatedItems.fromItem} to {paginatedItems.toItem} of {paginatedItems.totalItems}</p>
                        </div>
                        <div className="col-md-6">
                            <Paginator items={searchResults} perPage={10} onPageChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList;