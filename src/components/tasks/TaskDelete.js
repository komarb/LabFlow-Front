import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import API, {config} from "../../api/API";
import {useParams} from "react-router-dom";
import {AuthContext} from "../auth/AuthContext";

export default function TaskDelete(props) {
    const currentUser = useContext(AuthContext);
    async function deleteTask() {
        await API.delete(`/tasks/${props.task.id}`, config)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    function handleDeletion(event) {
        deleteTask();
        alert('Задание удалено!');
        event.preventDefault();
        window.location.reload();
    }

    return (
        <div>
            {currentUser.role === 'teacher' && (
                <div>
                    <FontAwesomeIcon className="task-delete-icon" onClick={handleDeletion} icon={['far', 'trash-alt']}/>
                </div>
            )}
        </div>
    )
}