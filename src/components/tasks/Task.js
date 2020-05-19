import React from 'react';
import {Link} from "react-router-dom";
import TaskDescription from "./TaskDescription";
import TaskDates from "./TaskDates";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Task(props) {
    return (
        <div className="task card mb-4 shadow-sm">
            <h2 className="card-title">{props.task.name}</h2>
            <TaskDescription task={props.task}/>
            <TaskDates task={props.task}/>
            <Link to={`/subjects/${props.task.subject_id}/tasks/${props.task.id}`}>
                <FontAwesomeIcon className="task-create-icon" icon={['far', 'plus-square']} transform="grow-10"/>
            </Link>
            <Link to={`/subjects/${props.task.subject_id}/tasks/${props.task.id}/reports`}>
                <FontAwesomeIcon className="task-reports-icon" icon={['far', 'eye']} transform="grow-10"/>
            </Link>
        </div>
    )
}