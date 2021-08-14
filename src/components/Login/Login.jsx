import React from 'react'

import './login.scss';



function Login() {
    return (
        <div>
            <div className="container">
                <h1 className='greet'>Hello, Welcome Back</h1>

                <h5 className='lggreet'>Login to manage your site</h5>

                <div className="form cen">
                    <input type="email" className="form-control email" placeholder="Enter email address"/><br/>
                    <input type="password" className="form-control pass" placeholder="Password"/>
                </div>
                <br /> <br /> 
                <button className="btn btn-light sgn">Sign in</button>
            </div>
        </div>
    )
}

export default Login;
