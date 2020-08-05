import React from 'react';

const Dashboard = props => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
                <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#">
                    <i className="fas fa-download fa-sm text-white-50"/>&nbsp;Generate Report</a>
            </div>
        </div>
    );
};

export default Dashboard;