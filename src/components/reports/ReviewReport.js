import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function ReviewReport(props) {
    return (
        <div className='review-report'>
            <FontAwesomeIcon className="report-done-icon" icon={['far', 'check-circle']} transform="grow-10"/>
            <FontAwesomeIcon className="report-remake-icon" icon={['far', 'question-circle']} transform="grow-10"/>
        </div>
    )
}