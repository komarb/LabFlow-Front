import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API, {config} from "../../api/API";
import MFS from "../../api/MFS";

export default function ReportCreation(props) {
    const { subjectID, taskID } = useParams();
    const [reportText, setReportText] = useState("");
    const [selectedFile, setSelectedFile] = useState("");

    function sendReport(data){
        let fileURL = '';
        MFS.post(`/files/upload`, data, config)     //TODO: remake nested requests
            .then(response => {
                API.post(`/subjects/${subjectID}/tasks/${taskID}`, {
                    text: reportText + `\nСсылка на файл: ${process.env.REACT_APP_MFS_URL}/download/${response.data.id}`
                }, config)
                    .then(response => alert('Отчет отправлен!'))
                    .catch(err => {
                        console.log(err);
                        alert('Что-то пошло не так, пожалуйста, попробуйте позже')
                    });
            })
            .catch(err => {
                console.log(err);
                alert('Что-то пошло не так, пожалуйста, попробуйте позже')
            });
        return fileURL
    }
    function handleSubmit(event) {
        const data = new FormData();
        data.append('file', selectedFile);
        console.log(selectedFile);
        sendReport(data);

        event.preventDefault();
    }

    function handleChange(event) {
        setReportText(event.target.value);
    }

    function handleFileChange(event) {
        setSelectedFile(event.target.files[0])
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Напишите ваш отчет:
                <textarea value={reportText} onChange={handleChange}/>
            </label>
            <label>
                Добавить файл к отчету:
                <input type="file" name="file" onChange={handleFileChange}/>
            </label>
            <input type="submit" value="Отправить" />
        </form>
    )
}