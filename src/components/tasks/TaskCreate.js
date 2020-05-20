import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AuthContext} from "../auth/AuthContext";
import API, {config} from "../../api/API";
import {useParams} from "react-router-dom";

export default function TaskCreate(props) {
    const currentUser = useContext(AuthContext);
    const [createMode, setCreateMode] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const { subjectID } = useParams();
    function handleChangeMode() {
        setCreateMode(!createMode);
    }

    async function createTask() {
        await API.post(`/subjects/${subjectID}`, {
            name: taskName,
            description: taskDescription,
        }, config)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    function handleTaskCreation(event) {
        createTask();
        alert('Задание создано!');
        event.preventDefault();
        window.location.reload();
    }

    function handleChangeName(event) {
        setTaskName(event.target.value);
    }

    function handleChangeDescription(event) {
        setTaskDescription(event.target.value);
    }
    return (
        <div>
            {currentUser.role === 'teacher' && (
                createMode ? (
                    <div className="task task-create card mb-4 shadow-sm">
                        <FontAwesomeIcon className="task-create-close-icon" onClick={handleChangeMode} icon={['far', 'times-circle']} transform="grow-10"/>
                        <form onSubmit={handleTaskCreation}>
                            <div>
                                <label>
                                    Название задачи:
                                    <input type='text' value={taskName} onChange={handleChangeName}/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Описание:
                                    <textarea value={taskDescription} onChange={handleChangeDescription}/>
                                </label>
                            </div>
                            <input type="submit" value="Отправить" />
                        </form>
                    </div>
                    ) : (
                    <div className="task task-create card mb-4 shadow-sm">
                        <FontAwesomeIcon className="task-create-icon" onClick={handleChangeMode} icon={['far', 'plus-square']} transform="grow-30"/>
                    </div>
                )
            )}
        </div>
    )
}