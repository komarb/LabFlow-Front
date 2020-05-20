import React, {useContext, useEffect, useState} from 'react';
import API, {config} from "../../api/API";
import {useParams} from "react-router-dom";
import Report from "./Report"
import {AuthContext} from "../auth/AuthContext";

export default function UserReports(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [reports, setReports] = useState([]);
    const currentUser = useContext(AuthContext);

    async function loadReports() {
        setIsLoading(true);
        await API.get(`/reports/${currentUser.id}`, config)
            .then(response => {
                return response.data.map(report => ({
                    id: report.id,
                    reporterId: report.reporterId,
                    date: report.date,
                    text: report.text,
                    teachers_note: report.teachers_note,
                    state: report.state,
                    archived: report.archived,
                    reporter: report.reporter
                }))
            })
            .then(reports => {
                setReports(reports);
                setIsLoading(false);
                console.log(reports);
            })
            .catch(err => console.log(err));
        setIsLoading(false);
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