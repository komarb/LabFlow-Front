import React from 'react';

export default function TaskDescription(props) {
    return (
        <div className="task-description text-muted">
            {props.task.description ? props.task.description : "Описание не приведено"}
        </div>
    )
}