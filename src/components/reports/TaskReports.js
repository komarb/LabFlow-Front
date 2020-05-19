import React, {useEffect, useState} from 'react';
import API from "../../api/API";
import {useParams} from "react-router-dom";
import Report from "./Report";

export default function TaskReports(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [reports, setReports] = useState([]);
    const { subjectID, taskID } = useParams();

    async function loadReports() {
        setIsLoading(true);
        await API.get(`/subjects/${subjectID}/tasks/${taskID}/reports`)
            .then(response => {
                return response.data.map(report => ({
                    id: report.id,
                    reporterId: report.reporterId,
                    date: report.date,
                    text: report.text,
                    teachers_note: report.teachers_note,
                    state: report.state,
                    archived: report.archived,
                }))
            })
            .then(reports => {
                setReports(reports);
                setIsLoading(false);
                console.log(reports);
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        loadReports()
    }, []);
    const reportsArray = reports.map((report, index) =>
        <Report report={report} key={index}/>
    );
    return (
            <div className="reports-deck card-deck mb-3 text-center">
                {reportsArray}
            </div>
    )
}