import React from 'react';

export default function Report(props) {
    return (
        <div className="report card mb-4 shadow-sm">
            Hello
            <p>{props.report.text}</p>
        </div>
    )
}