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
            </div>

        </div>
    )
};

Admin.propTypes = {
    children: PropTypes.node
};

export default Admin;