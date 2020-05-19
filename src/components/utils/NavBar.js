import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import authService from "../../services/authService";

export default function Profile(props) {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        setCurrentUser(authService.getCurrentUser())
    }, []);

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                LabFlow
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Главная
                    </Link>
                </li>

                {currentUser && (
                    <li className="nav-item">
                        <Link to={"/subjects"} className="nav-link">
                            Предметы
                        </Link>
                    </li>
                )}
                {currentUser && (
                    <li className="nav-item">
                        <Link to={"/reports"} className="nav-link">
                            Мои отчеты
                        </Link>
                    </li>
                )}
            </div>

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/signin" className="nav-link" onClick={authService.logout}>
                            Выйти
                        </a>
                    </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/signin"} className="nav-link">
                            Войти
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                            Зарегистрироваться
                        </Link>
                    </li>
                </div>
            )}
        </nav>
    );
}