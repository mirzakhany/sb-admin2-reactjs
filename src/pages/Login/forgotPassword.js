import React, {useState} from "react";
import AuthService from "services/Auth/authService";
import {Link} from "react-router-dom";

const ForgotPassword = props => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false)

    const onEmailChange = (event) => {
        const target = event.target;
        setEmail(target.value)
    }

    const handleSubmit = (event) => {
        AuthService.forgotPassword(email)
            .then((res)=>{
                setMessage(true)
            })
        event.preventDefault();
    }

    return (
        <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <i className="fas fa-5x fa-umbrella text-primary"/>
                                    <h1 className="h4 text-gray-900 mb-2 mt-4">Forgot Your Password?</h1>
                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                        and we'll send you a link to reset your password!</p>
                                </div>
                                {message && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        An email with recovery instruction sent to your email, please flow instruction to recover your password
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                )}
                                <form className="user" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user"
                                               onChange={onEmailChange}
                                               id="InputEmail" aria-describedby="emailHelp"
                                               placeholder="Enter Email Address..."/>
                                    </div>
                                    <button className="btn btn-primary btn-user btn-block" type="submit">Reset Password</button>
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <Link className="small" to="/login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;