import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

export default function TaskDates(props) {
    const updated_at = new Date(props.task.updated_at);
    const created_at = new Date(props.task.created_at);
    const deadline = new Date(props.task.deadline);
    return(
        <div className="task-dates">
            <FontAwesomeIcon icon={['far', 'clock']} />
            <p>Дата создания: {created_at.toLocaleDateString()}</p>
            <p>{isValidDate(updated_at) ? "Последнее обновление: " + updated_at.toLocaleDateString() : ""}</p>
            <p>Дедлайн: {isValidDate(deadline) ? deadline.toLocaleDateString() : "Не указан" }</p>
        </div>
    );
}