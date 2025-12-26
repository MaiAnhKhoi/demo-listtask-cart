import {  useEffect, useState } from "react";
import type { Task } from "../../types/task";

export const AddTask = (props : {onAddTask: (newTask: string) => void, checkEdit: boolean, onEditTask: (id: number, updatedTitle: string) => void, task: Task}) => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(props.checkEdit ? props.task.title : "");
    }, [props.task, props.checkEdit]);

    const handleAddTask = () => {
        if(inputValue.trim() !== "") {
            props.onAddTask(inputValue.trim());
            setInputValue("");
        }
    };

    const handleEditTask = (id: number) => {
        if(inputValue.trim() !== "") {
            props.onEditTask(id, inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Add new task" className="border p-2 rounded" value={ inputValue} onChange={(e) => setInputValue(e.target.value)} />
            {props.checkEdit ? <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={() => handleEditTask(props.task.id)}>Save</button> : <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleAddTask}>Add</button>}
        </div>
    );
}