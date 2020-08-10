import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useToasts } from 'react-toast-notifications'
import axios from "axios";
import {configs} from 'services/Network/configs';

const TaskEdit = props => {

    let {taskID} = useParams();
    const TASKS_URL = configs.API_URL + "/tasks"
    const { addToast } = useToasts()

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        sprint: "sprint-1",
        status: "in-backlog",
        estimate: "",
        assignee: "",
    })
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSaved, setIsSaved] = useState(true);

    const getTask = (taskID) => {
        return axios.get(TASKS_URL + "/" + taskID)
    }

    const updateTask = (data) => {
        const url = taskID === undefined ? TASKS_URL : TASKS_URL + "/" + taskID;
        return axios({
            method: taskID === undefined ? "post" : "put",
            url: url,
            data: data
        })
    }

    useEffect(() => {
        if (taskID === undefined) {
            setIsLoaded(true);
            return
        }
        getTask(taskID).then(
            (res) => {
                console.log(res)
                const result = res.data;
                setFormData({
                    id: result.id,
                    title: result.title,
                    sprint: result.sprint,
                    status: result.status,
                    estimate: result.estimate,
                    assignee: result.assignee,
                })
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                addToast(error.message, {appearance: 'error'})
            }
        )
    }, [taskID])

    const handleInputChange = (event) => {
        const target = event.target;
        let newData = formData;
        newData[target.name] = target.value;
        setFormData({...newData})
    }

    const handleSubmit = (event) => {
        setIsSaved(false);
        updateTask(formData).then(
            (res) => {
                const result = res.data;
                setFormData({
                    id: result.id,
                    title: result.title,
                    sprint: result.sprint,
                    status: result.status,
                    estimate: result.estimate,
                    assignee: result.assignee,
                })
                setIsLoaded(true);
                if (taskID === undefined) {
                    addToast("Task created", {appearance: 'success', autoDismiss: true})
                }else{
                    addToast("Task updated", {appearance: 'success', autoDismiss: true})
                }
                setIsSaved(true);
            },
            (error) => {
                setIsLoaded(true);
                setIsSaved(true);
                addToast(error.message, {appearance: 'error'})
            }
        )

        event.preventDefault();
    }

    return (
        <div className="container-fluid justify-content-xl-center">
            <h3 className="text-dark mb-4">Task</h3>
            <div className="row">
                <div className="col-8 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                    <div className="card shadow mb-3">
                        <div className="card-header py-3">
                            <div className="text-primary m-0 font-weight-bold">Task info
                                {!isLoaded && (
                                        <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="title"><strong>Title</strong><br/></label>
                                            <input onChange={handleInputChange} value={formData['title']}
                                                   className="form-control" type="text" placeholder="task.title"
                                                   name="title"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="sprint"><strong>Sprint</strong></label>
                                            <select onChange={handleInputChange}
                                                    value={formData['sprint']}
                                                    className="form-control" name="sprint">
                                                <option value="sprint-1">sprint 1</option>
                                                <option value="sprint-2">sprint 2</option>
                                                <option value="sprint-3">sprint 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="status"><strong>Status</strong></label>
                                            <select onChange={handleInputChange}
                                                    value={formData['status']}
                                                    className="form-control" name="status">
                                                <option value="in-backlog">In backlog</option>
                                                <option value="in-progress">In progress</option>
                                                <option value="done">Done</option>
                                                <option value="ready-to-test">Ready to test</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="estimate">
                                                <strong>Estimate</strong>
                                            </label>
                                            <input onChange={handleInputChange}
                                                   value={formData['estimate']}
                                                   className="form-control" type="text" placeholder="10"
                                                   name="estimate"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="assignee">
                                                <strong>Assignee</strong>
                                            </label>
                                            <input onChange={handleInputChange}
                                                   value={formData['assignee']}
                                                   className="form-control" type="text" placeholder="Doe"
                                                   name="assignee"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group text-right">
                                    {taskID && (
                                        <button className="btn btn-danger btn-sm" type="submit">
                                            {/*<span className="mr-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>*/}
                                            Delete
                                        </button>
                                    )}
                                    <button className="btn btn-primary btn-sm ml-2" type="submit">
                                        {/*<span className="mr-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>*/}
                                        Save and new
                                    </button>
                                    <button className="btn btn-primary btn-sm ml-2" type="submit">
                                        {!isSaved &&
                                            <span className="mr-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                        Save Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskEdit;