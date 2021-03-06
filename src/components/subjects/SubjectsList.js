import React, {useEffect, useState} from 'react';
import API, {config} from "../../api/API";
import Subject from "./Subject";

export default function SubjectsList(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [subjects, setSubjects] = useState([]);

    async function loadSubjects() {
        setIsLoading(true);

        await API.get('/subjects', config)
            .then(response => {
                let subjects = response.data.map(subject => ({
                    id: subject.id,
                    teacher: subject.teacher,
                    name: subject.name,
                    groups: subject.groups
                }));
                return subjects
            })
            .then(subjects => {
                setSubjects(subjects);
                setIsLoading(false);
                console.log(subjects);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadSubjects()
    }, []);
    const subjectsArray = subjects.map((subject, index) =>
        <Subject subject={subject} key={index}/>
    );
    return (
        <div className="subjects-list">
            {isLoading ? "Loading..." : subjectsArray}
        </div>
    )
}