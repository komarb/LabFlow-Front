import React from 'react';
import MoreButton from "../utils/MoreButton";
export default function Subject(props) {
    return (
        <div className="subject">
            <h2 className="card-title">{props.subject.name}</h2>
            Преподаватель: <b>{props.subject.teacher.name}</b>
            <hr/>
            <MoreButton subject={props.subject}/>
        </div>
    )
}