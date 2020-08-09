import React, {useEffect, useState} from "react";
import AuthService from "services/Auth/authService";
import defaultAvatar from "assets/img/defaultAvatar.jpg";

const Profile = props => {

    const [formData, setFormData] = useState({
        id: "",
        email: "",
        firstname: "",
        lastname: "",
    })

    useEffect(()=>{
        const user = AuthService.getCurrentUser()
        setFormData({
            id: user.id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
        })
    }, [])


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
                                             <div className="col col-lg-6 col-xl-6 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="email"><strong>Email Address</strong></label>
                                                    <input className="form-control" value={formData["email"]}
                                                           type="email" placeholder="user@example.com" name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group"><label htmlFor="first_name"><strong>First
                                                    Name</strong></label>
                                                    <input className="form-control" type="text"
                                                           value={formData["firstname"]}
                                                           placeholder="John"
                                                           name="first_name"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group">
                                                    <label htmlFor="last_name"><strong>Last Name</strong></label>
                                                    <input className="form-control"
                                                           type="text"
                                                           value={formData["lastname"]}
                                                           placeholder="Doe"
                                                           name="last_name"/>
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
                            <img className="rounded-circle mb-3 mt-4" src={defaultAvatar} alt="" width="160" height="160"/>
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