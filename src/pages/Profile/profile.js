import React from "react";

const Profile = props => {

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
                <div className="col-lg-8 col-xl-9">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow mb-3">
                                <div className="card-header py-3">
                                    <p className="text-primary m-0 font-weight-bold">User Settings</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="username"><strong>Username</strong></label>
                                                    <input className="form-control" type="text" placeholder="user.name"
                                                    name="username"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="email"><strong>Email Address</strong></label>
                                                    <input className="form-control" type="email"
                                                                                   placeholder="user@example.com"
                                                                                   name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group"><label htmlFor="first_name"><strong>First
                                                    Name</strong></label><input className="form-control" type="text"
                                                                                placeholder="John" name="first_name"/></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="last_name"><strong>Last Name</strong></label>
                                                    <input className="form-control" type="text"
                                                                                placeholder="Doe" name="last_name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group text-right">
                                            <button className="btn btn-primary btn-sm" type="submit">Save Settings</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="card mb-3">
                        <div className="card-body text-center shadow">
                            <img className="rounded-circle mb-3 mt-4" src="" alt="" width="160"
                                                                           height="160"/>
                            <div className="mb-3">
                                <button className="btn btn-primary btn-sm" type="button">Change Photo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;