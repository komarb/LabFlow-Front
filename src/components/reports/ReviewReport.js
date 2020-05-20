import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import API, {config} from "../../api/API";


export default function ReviewReport(props) {
    const [reviewMode, setReviewMode] = useState(false);
    const [reviewText, setReviewText] = useState("");

    function acceptReport() {
        updateState();
        alert('Работа принята!');
        window.location.reload();
    }
    async function updateState() {
        await API.put(`/reports/${props.report.id}`, {
            state: 'done'
        }, config)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }
    function changeMode() {
        setReviewMode(!reviewMode);
    }
    async function updateTeacherReview() {
        await API.put(`/reports/${props.report.id}`, {
            teachers_note: reviewText,
            state: 'redo'
        }, config)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        updateTeacherReview();
        alert('Отчет отправлен!');
        event.preventDefault();
        window.location.reload();
    }

    function handleChange(event) {
        setReviewText(event.target.value);
    }
    return (
        <div className='review-report'>
            {reviewMode ? (
                <div>
                    <FontAwesomeIcon className="review-close-icon" onClick={changeMode} icon={['far', 'times-circle']} transform="grow-10"/>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Напишите, что исправить:
                            <textarea value={reviewText} onChange={handleChange}/>
                        </label>
                        <input type="submit" value="Отправить" />
                    </form>
                </div>
            ) : (
                <div className="icons">
                    <FontAwesomeIcon className="report-done-icon" onClick={acceptReport} icon={['far', 'check-circle']} transform="grow-10"/>
                    <FontAwesomeIcon className="report-remake-icon" onClick={changeMode} icon={['far', 'question-circle']} transform="grow-10"/>
                </div>
            )}
        </div>
    )
}