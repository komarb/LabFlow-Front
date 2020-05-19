import React from 'react';


export default function Login(props) {

    return (
        <div className="login-form">
            <form
                encType="multipart/form-data"
                action="http://localhost:8080/auth"
                method="post"
            >
                <label>
                    Логин
                    <input
                        type="username"
                        name="login"
                    />
                </label>
                <label>
                    Пароль
                    <input
                        type="password"
                        name="password"
                    />
                </label>
                <input
                    type="submit"
                    value="Войти"
                />
            </form>
        </div>
    )
}