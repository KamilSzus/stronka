import React from 'react';
import {Navigate} from 'react-router-dom';
import LoginForm from '../LoginForm'


const cryptoJS = require('crypto-js');

class SignUp extends React.Component {
    constructor(props) {
        // Init our constructor and variables.
        super(props);
        this.state = {
            apiResponce: '',
            username: '',
            password: ''
        };
        this.Authenticate = this.Authenticate.bind(this);
        // So we are able to call this from render()'s html.
        this.Register = this.Register.bind(this);
    }

    async Register(event) {
        // Todo: add a register function to the API
        event.preventDefault();
        if (!this.state.username.match(/^[0-9a-zA-Z]+$/) || !this.state.password.match(/^[0-9a-zA-Z]+$/)) {
            this.setState({apiResponce: 'Please use alphanumeric chars'});
        } else {
            let curDate = new Date();
            var toHash = this.state.username + '/' + curDate.getUTCMonth() + '/' + curDate.getUTCDate() + '/' + curDate.getUTCFullYear() + '/' + curDate.getUTCMinutes() + '/' + curDate.getUTCSeconds();
            var hash = cryptoJS.SHA256(toHash);
            let dataPOST = {
                username: this.state.username,
                password: cryptoJS.AES.encrypt(this.state.password, hash.toString()).toString()
            };
            if (this.state.username && this.state.password) {
                await fetch('http://localhost:3000/api/v1/register', {
                    method: 'POST',
                    body: JSON.stringify(dataPOST),
                    headers: {'Content-Type': 'application/json'}
                })
                    .then((res) => res.json())                                           // Parse responce as JSON.
                    .then((data) => this.setState({apiResponce: data.success}))          // Set apiResponce to data.TYPE <-- responce of the api/v1/register function.
                    .catch((error) => this.setState({apiResponce: 'Failed to recive responce.'}));  // If failed return an error.
            } else
                this.setState({apiResponce: 'Please enter a username/password'});    // If failed return an error.
        }
    }

    async Authenticate(event) {
        event.preventDefault();
        // So we don't refresh page on function call.
        if (!this.state.username.match(/^[0-9a-zA-Z]+$/) || !this.state.password.match(/^[0-9a-zA-Z]+$/)) {
            this.setState({apiResponce: 'Please use alphanumeric chars'});
        } else {
            let curDate = new Date();
            var toHash = this.state.username + '/' + curDate.getUTCMonth() + '/' + curDate.getUTCDate() + '/' + curDate.getUTCFullYear() + '/' + curDate.getUTCMinutes() + '/' + curDate.getUTCSeconds();
            var hash = cryptoJS.SHA256(toHash);
            let dataPOST = {
                username: this.state.username,
                password: cryptoJS.AES.encrypt(this.state.password, hash.toString()).toString()
            };
            if (this.state.username && this.state.password) {
                await fetch('http://localhost:3000/api/v1/login', {
                    method: 'POST',
                    body: JSON.stringify(dataPOST),
                    headers: {'Content-Type': 'application/json'}
                })
                    .then((res) => res.json())                                           // Parse responce as JSON.
                    .then((data) => this.setState({apiResponce: data.success}))          // Set apiResponce to data.TYPE <-- responce of the api/v1/login function.
                    .catch((error) => this.setState({apiResponce: 'Failed to recive responce.'}));  // If failed return an error.
            } else
                this.setState({apiResponce: 'Please enter a username/password'});    // If failed return an error.
        }
    }

    render() {

        if (this.state.apiResponce === "true") {
            return <Navigate to="/hub/home"/>
        }

        return (
            <>
                <LoginForm/>
            </>
        )
    }
}

export default SignUp;