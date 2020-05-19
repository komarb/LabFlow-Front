import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Task(props) {

    return (
        <div className="task task-create card mb-4 shadow-sm">
            <FontAwesomeIcon  className="task-create-icon" icon={['far', 'plus-square']} transform="grow-30"/>
        </div>
    )
}