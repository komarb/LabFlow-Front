import React, {useReducer, useEffect, useState} from "react";
import authService from "../../services/authService";

let reducer = (currentUser, newCurrentUser) => {
    return { ...currentUser, ...newCurrentUser };
};
const localState = JSON.parse(localStorage.getItem("user"));
const initialState = {};

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useReducer(reducer, localState || initialState);

    useEffect(() => {
        setCurrentUser(authService.getCurrentUser())
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    );
}