import React from 'react';
import {ISOtoLocal} from "../utils/utils";
import ReviewReport from "./ReviewReport";

export default function Report(props) {
    return (
        <div className="report card mb-4 shadow-sm">
            <p>Время отправки: {ISOtoLocal(props.report.date)}</p>
            <p>Автор: {props.report.reporter[0].name}</p>
            <p>{props.report.text}</p>
            <ReviewReport/>
        </div>
    )
}