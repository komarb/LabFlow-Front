import React, {useContext, useState} from 'react';
import {ISOtoLocal} from "../utils/utils";
import ReviewReport from "./ReviewReport";
import {AuthContext} from "../auth/AuthContext";
const ReactMarkdown = require('react-markdown');


export default function Report(props) {
    const currentUser = useContext(AuthContext);
    return (
        <div className="report card mb-4 shadow-sm">
            <p>Дата и время отправки: {ISOtoLocal(props.report.date)}</p>
            <p>Автор: {props.report.reporter[0].name}</p>
            <p><ReactMarkdown source={props.report.text} /></p>
            <p>Состояние: {props.report.state ?
                props.report.state==='redo' && 'необходимы изменения'
                || props.report.state==='done' && 'работа принята'
                : 'не проверено'}</p>
            <p>{props.report.teachers_note ? 'Замечания: ' + props.report.teachers_note : ''}</p>
            {currentUser.role === 'teacher' && <ReviewReport report={props.report}/>}
        </div>
    )
}

//TODO: Role can be changed in browser