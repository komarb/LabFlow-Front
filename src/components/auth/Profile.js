import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";

export default function Profile(props) {
    const currentUser = useContext(AuthContext);
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                   Профиль <strong>{currentUser.username}</strong>
                </h3>
            </header>
            <p>
                <strong>Токен:</strong>{" "}
                {currentUser.accessToken && currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken && currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <strong>Группы:</strong>
            <ul>
                {currentUser.groups &&
                currentUser.groups.map((group, index) => <li key={index}>{group}</li>)}
            </ul>
        </div>
    );
}