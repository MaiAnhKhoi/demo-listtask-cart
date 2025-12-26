import {type Task} from "../../types/task"

export const TaskList = (props:{tasks: Task[], onDeleteTask: (id: number) => void, onCheckEdit: (id: number) => void, onToggleComplete: (id: number) => void}) => {
    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li className="flex gap-10" key={index}>
                    <input type="checkbox" checked={task.completed} onChange={() => props.onToggleComplete(task.id)} />
                    {task.completed ? <s>{task.title}</s> : <span>{task.title}</span>}
                    <div className="flex gap-4">
                        <button onClick={() => props.onCheckEdit(task.id)}>edit</button>
                        <button onClick={() => props.onDeleteTask(task.id)}>delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}