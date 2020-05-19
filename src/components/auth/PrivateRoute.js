import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from "../../services/authService";


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authService.getCurrentUser();
        if (!currentUser) {
            return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        }

        return <Component {...props} />
    }} />
);