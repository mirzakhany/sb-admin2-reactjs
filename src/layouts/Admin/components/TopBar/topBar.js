import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import AuthService from "services/Auth/authService";
import defaultAvatar from "assets/img/defaultAvatar.jpg";

const TopBar = props => {

    let history = useHistory();
    const [fullName, setFullName] = useState("");

    useEffect(()=>{
        const user = AuthService.getCurrentUser()
        setFullName(user.firstname + " "+ user.lastname)
    }, [])

    const handleLogout = () => {
        AuthService.logout()
        history.push("/login")
    }
    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
                <button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars"/>
                </button>
                <form
                    className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input className="bg-light form-control border-0 small" type="text"
                               placeholder="Search for ..."/>
                        <div className="input-group-append">
                            <button className="btn btn-primary py-0" type="button">
                                <i className="fas fa-search"/>
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="nav navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow">
                        <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/#">
                            <i className="fas fa-search"/></a>
                        <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu"
                             aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto navbar-search w-100">
                                <div className="input-group">
                                    <input className="bg-light form-control border-0 small" type="text"
                                           placeholder="Search for ..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary py-0" type="button">
                                            <i className="fas fa-search"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <div className="d-none d-sm-block topbar-divider"/>
                    <li className="nav-item dropdown no-arrow" role="presentation">
                        <div className="nav-item dropdown no-arrow">
                            <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"
                               href="/#">
                                <span className="d-none d-lg-inline mr-2 text-gray-600 small">{fullName}</span>
                                <img className="border rounded-circle img-profile" alt=""
                                     src={defaultAvatar}/></a>
                            <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu">
                                <Link className="dropdown-item" role="presentation" to="/profile">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>Profile</Link>
                                <div className="dropdown-divider"/>
                                <button className="dropdown-item" role="presentation" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>Logout</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar;