import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import API, {config} from "../../api/API";

export default function ReportCreation(props) {
    const { subjectID, taskID } = useParams();
    const [reportText, setReportText] = useState("");

    async function createReport() {
        await API.post(`/subjects/${subjectID}/tasks/${taskID}`, {
            text: reportText
        }, config)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    function handleSubmit(event) {
        createReport();
        alert('Отчет отправлен!');
        event.preventDefault();
    }

    function handleChange(event) {
        setReportText(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Напишите ваш отчет:
                <textarea value={reportText} onChange={handleChange}/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
    )
}