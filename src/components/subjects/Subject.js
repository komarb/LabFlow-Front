import React from 'react';
import MoreButton from "../utils/MoreButton";
export default function Subject(props) {
    return (
        <div className="subject card mb-4 shadow-sm">
            <h2 className="card-title">{props.subject.name}</h2>
            {props.subject.teacher.name}
            <MoreButton subject={props.subject}/>
        </div>
    )
}