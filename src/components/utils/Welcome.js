import React from 'react';

export default function Welcome(props) {
    return (
        <div className="container">
            <div className="col-xs-12 jumbotron text-center">
                <h1>LabFlow</h1>
                <p>Все работы под рукой</p>
                <a href="/signin" className="btn btn-primary btn-lg btn-login btn-block">Войти</a>
            </div>
        </div>
    )
}