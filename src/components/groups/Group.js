import React from 'react';

export default function Group(props) {
    return (
        <div className="group card mb-4 shadow-sm">
            <h2 className="card-title">{props.group.name}</h2>
        </div>
    )
}