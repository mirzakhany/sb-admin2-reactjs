import React from 'react';
import {NavLink} from "react-router-dom";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled: props.isToggled
        }
    }

    toggleSideBar = () => {
        this.setState({
            isToggled: !this.state.isToggled
        })
    }

    render() {
        return (
            <nav
                className={`navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 sidenav ${this.state.isToggled ? 'toggled' : null} `}>
                <div className="container-fluid d-flex flex-column p-0">
                    <NavLink className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                       activeClassName="active"
                       to="/dashboard">
                        <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-braille"></i></div>
                        <div className="sidebar-brand-text mx-3"><span>Admin</span></div>
                    </NavLink>
                    <hr className="sidebar-divider my-0"/>
                    <ul className="nav navbar-nav text-light sidenav-menu" id="accordionSidebar">
                        <li className="nav-item" role="presentation">
                            <NavLink className="nav-link" activeClassName="active" to="/dashboard">
                                <i className="fas fa-tachometer-alt"></i><span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" role="presentation">
                            <NavLink className="nav-link" activeClassName="active" to="/tasks">
                                <i className="fas fa-table"></i><span>Tasks</span>
                            </NavLink>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" data-toggle="collapse" aria-expanded="false"
                               aria-controls="collapse-1" href="#collapse-1">
                                <i className="fas fa-user-cog"></i>
                                <span>Auth</span>
                            </a>
                            <div id="collapse-1" className="collapse show sidenav-menu-nested">
                                <ul className="nav navbar-nav text-light">
                                    <li className="nav-item" role="presentation">
                                        <NavLink className="nav-link" activeClassName="active" to="table.html">Users</NavLink>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <NavLink className="nav-link" activeClassName="active" to="groups.html">Groups</NavLink>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <NavLink className="nav-link" activeClassName="active" to="table.html">Rules</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="text-center d-none d-md-inline">
                        <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"
                                onClick={this.toggleSideBar}></button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;