import React, {useEffect} from "react";
import PropTypes from "prop-types";

const Auth = props => {
    const {children} = props;

    useEffect(() => {
        document.body.classList.add("login-background");
        return () => {
            // clean up
            document.body.classList.remove("login-background");
        }
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                {children}
            </div>
        </div>
    )
}

Auth.propTypes = {
    children: PropTypes.node
};

export default Auth;