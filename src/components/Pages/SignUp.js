import React from 'react';
import {Navigate} from 'react-router-dom';
import LoginForm from '../LoginForm'


const cryptoJS = require('crypto-js');

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        };

    render() {

        if (window.loginState === "ADMIN") {
            return <Navigate to="/AdminPanel"/>
        }else if(window.loginState === "STANDARD_USER"){
            return <Navigate to="/"/>
        }

        return (
            <>
                <LoginForm/>
            </>
        )
    }
}

export default SignUp;