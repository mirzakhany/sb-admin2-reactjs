import React, {useState} from "react";
import AuthService from "services/Auth/authService";
import {useHistory, useLocation, Link} from "react-router-dom";

const Login = props => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [formData, setFormData] = useState({email: "", password: ""});
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    const changeHandler = (event) => {
        const target = event.target;
        const data = formData;
        data[target.name] = target.value;
        setFormData(data)
    }

    const loginHandler = (event) => {
        setIsLoaded(false)
        AuthService.login(formData["email"], formData["password"])
            .then((res)=>{
                setIsLoaded(true)
                if (res.status === 200){
                    history.replace(from);
                }else{
                    setError(res)
                }
            })
        event.preventDefault();
    }

    return (
        <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <i className="fas fa-5x fa-braille text-primary"/>
                                    <h4 className="text-dark mt-4 mb-4">Login</h4>
                                </div>
                                {error && (
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        email address or password is not correct.
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                )}
                                <form className="user" onSubmit={loginHandler}>
                                    <div className="form-group">
                                        <input className="form-control form-control-user"
                                               type="email"
                                               id="InputEmail"
                                               onChange={changeHandler}
                                               aria-describedby="emailHelp"
                                               placeholder="Email Address"
                                               name="email"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control form-control-user"
                                               type="password"
                                               id="InputPassword"
                                               onChange={changeHandler}
                                               placeholder="Password"
                                               name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                            <div className="form-check">
                                                <input className="form-check-input custom-control-input" name="rememberMe" type="checkbox" id="rememberMeCheck"/>
                                                <label className="form-check-label custom-control-label" htmlFor="rememberMeCheck">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block text-white btn-user mt-5" type="submit">
                                        {!isLoaded &&
                                        <span className="mr-2 spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                        Login
                                    </button>
                                    <hr/>
                                    <button className="btn btn-primary btn-block text-white btn-google btn-user">
                                        <i className="fab fa-google"/> Login with Google
                                    </button>
                                    <hr/>
                                </form>
                                <div className="text-center">
                                    <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;