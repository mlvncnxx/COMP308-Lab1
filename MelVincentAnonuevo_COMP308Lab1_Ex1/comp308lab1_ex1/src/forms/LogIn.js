import React from 'react'
import {NavLink} from 'react-router-dom';


class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
    };

    handlePassword = (event) => {
        this.setState({password: event.target.value});
    };

    render() {
        return (
            <React.Fragment>
            <div>
                <p>
                    <h1>Login to evaluate course:</h1>
                </p>
            </div>
            <div className="div-form">
                <form>
                    <label>
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmail}
                        />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePassword}
                        />
                    </label>
                </form>
            </div>
            <NavLink exact to={'/Comments/${this.state.email}'}>
                <button type="submit" value="login" id="login-button">Login</button>
            </NavLink>
            </React.Fragment>
        );
    }
}

export default LogIn;