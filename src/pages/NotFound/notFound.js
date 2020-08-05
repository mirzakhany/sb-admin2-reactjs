import React from "react";

class NotFound extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-dark mb-4">Page not found</h3>
            </div>
        )
    }
}

export default NotFound;