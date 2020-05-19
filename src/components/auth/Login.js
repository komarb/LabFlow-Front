import React, {useState} from "react";

import authService from "../../services/authService";
import Form from "react-bootstrap/Form";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        authService.login(username, password).then(
            () => {
                props.history.push('/subjects');
                window.location.reload();
            },
            error => {
                console.log('ERROR');
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
                setIsLoading(false);
            }
        )
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <Form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <span className="spinner-border spinner-border-sm"/>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}