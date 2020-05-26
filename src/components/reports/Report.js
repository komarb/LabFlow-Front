import React, {useContext} from 'react';
import {ISOtoLocal} from "../utils/utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReviewReport from "./ReviewReport";
import {AuthContext} from "../auth/AuthContext";
const ReactMarkdown = require('react-markdown');


export default function Report(props) {
    const currentUser = useContext(AuthContext);
    return (
        <div className="report card mb-4 shadow-sm">
            <div className="report-header">
                <div className="report-date">
                    <FontAwesomeIcon className="report-date-icon icon" icon={['far', 'clock']}/>
                    <b>{ISOtoLocal(props.report.date)}</b>
                </div>
                <p>{props.report.reporter[0].name}</p>
                <hr/>
            </div>
            <div className="report-body">
                <small className="report-desc-label">Описание</small>
                <p>{props.report.text ? <ReactMarkdown source={props.report.text} /> : 'Отсутствует'}</p>
                <small>Состояние: {props.report.state ?
                    props.report.state==='redo' && 'необходимы изменения'
                    || props.report.state==='done' && 'работа принята'
                    : 'не проверено'}</small>
                <p>{props.report.teachers_note ? 'Замечания: ' + props.report.teachers_note : ''}</p>
                {currentUser.role === 'teacher' && <ReviewReport report={props.report}/>}
            </div>
        </div>
    )
}

//TODO: Role can be changed in browser