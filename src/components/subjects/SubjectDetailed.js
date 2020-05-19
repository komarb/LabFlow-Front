import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import API from "../../api/API";
import Group from "../groups/Group";
import Task from "../tasks/Task";
import TaskCreate from "../tasks/TaskCreate";
import {Button} from "react-bootstrap";

export default function SubjectDetailed(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [subject, setSubject] = useState({name : '', teacher: {name: '', id: ''}, groups : []});
    const [tasks, setTasks] = useState([]);
    const [groups, setGroups] = useState([]);
    const [viewVariant, setViewVariant] = useState(true);
    const { subjectID } = useParams();

    async function loadTasks() {
        setIsLoading(true);
        await API.get(`/subjects/${subjectID}/tasks`)
            .then(response => {
                return response.data.map(task => ({
                    id: task.id,
                    subject_id: task.subject_id,
                    name: task.name,
                    description: task.description,
                    created_at: task.created_at,
                    updated_at: task.updated_at,
                    deadline: task.deadline,
                }))
            })
            .then(tasks => {
                setTasks(tasks);
                setIsLoading(false);
                console.log(tasks);
            })
            .catch(err => console.log(err));
    }

    async function loadGroups() {
        setIsLoading(true);
        await API.get(`/subjects/${subjectID}/groups`)
            .then(response => {
                let groups = response.data.map(group => ({
                    id: group.id,
                    name: group.name,
                    subjects: group.subjects,
                    students: group.students
                }));
                return groups
            })
            .then(groups => {
                setGroups(groups);
                setIsLoading(false);
                console.log(groups);
            })
            .catch(err => console.log(err));
    }

    async function loadSubject() {
        setIsLoading(true);
        await API.get(`/subjects/${subjectID}`)
            .then(response => {
                setSubject(response.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }

    function ChangeViewVariant() {
        setViewVariant(!viewVariant);
    }

    useEffect(() => {
        loadSubject();
        loadTasks();
        loadGroups();
    }, []);

    const groupsArray = groups.map((group, index) =>
        <Group group={group} key={index}/>
    );
    const tasksArray = tasks.map((task, index) =>
        <Task task={task} key={index}/>
    );
    return (
        <div className="subject card mb-4 shadow-sm">
            {isLoading ? "Loading..." :
                <div>
                    <h2 className="card-title">{subject.name}</h2>
                    Преподаватель: {subject.teacher.name}<br/>
                    <Button onClick={ChangeViewVariant}>{viewVariant ? "По группам" : "По заданиям"} </Button>
                    {viewVariant ? (
                        <div>

                            <div className="task-deck card-deck mb-3 text-center">
                                {tasksArray}
                                <TaskCreate/>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="group-deck card-deck mb-3 text-center">
                                {groupsArray}
                            </div>
                        </div>
                    )}
                </div>

            }
        </div>

    )
}