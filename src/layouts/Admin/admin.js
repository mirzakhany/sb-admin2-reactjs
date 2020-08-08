import React from 'react';
import PropTypes from 'prop-types';
import {SideBar, TopBar} from './components';


const Admin = props => {
    const {children} = props;

    return (
        <div id="wrapper">
            <SideBar isToggled={false}/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <TopBar/>
                    {children}
                </div>
                <footer className="bg-white sticky-footer">
                    <div className="container my-auto">
                        <div className="text-center my-auto copyright"><span>Copyright © 2020</span></div>
                    </div>
                </footer>
            </div>
        </div>
    )
};

Admin.propTypes = {
    children: PropTypes.node
};

export default Admin;