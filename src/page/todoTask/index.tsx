import { AddTask } from "../../components/todoTask/addTask";
import { TaskList } from "../../components/todoTask/TaskList";
import { Title } from "../../components/todoTask/Title";
import type { Task } from "../../types/task";
import { tasksList } from "../../data/Task";
import { useEffect, useState } from "react";
import { TodoLayout } from "../../layout/TodoLayout";
import { Filter as Fileter } from "../../components/todoTask/filter";

type FilterType = "all" | "completed" | "id" | "title" | "createdAt" | "updatedAt";
type SortType = "asc" | "desc" | "completed" | "incomplete";

type FilterTuple = [FilterType, SortType];
export const TodoTask = () => {

    const [tasks, setTasks] = useState<Task[]>(tasksList);
    const [checkEdit, setCheckEdit] = useState<boolean>(false);
    const [task, setTask] = useState<Task>(null as unknown as Task);
    const [checkComplete, setCheckComplete] = useState<boolean>(false);
    const [filter, setFilter] = useState<FilterTuple>(["all", "asc"]);


    const checkEditTask = (id : number) => {
        setCheckEdit(true);
        const taskToEdit = tasks.find(task => task.id === id);
        if (taskToEdit ) {
            setTask(taskToEdit);
        }
    }
    const sortASC = (tasks: Task[]) : Task[] => {
        return tasks.sort((a, b) => {
            return a.id - b.id;
        });
    }

    const sortDESC = (tasks: Task[]) : Task[] => {
        return tasks.sort((a, b) => {
            return b.id - a.id;
        }); 
    }
    const hanldFilter = (filterTuple: FilterTuple) => {
        setFilter(filterTuple);
    }
    const filterTasks = (tasks: Task[], filterTuple: FilterTuple) : Task[] => {
        const [filterType, sortType] = filterTuple;
        let filteredTasks = [...tasks]; 
        if (filterType !== "all") {
            if(filterType === "completed") {
                if (sortType === "completed") { 
                filteredTasks = filteredTasks.filter(task => task.completed);
                } else if (sortType === "incomplete") {
                filteredTasks = filteredTasks.filter(task => !task.completed);
                }
            }   
            else if(filterType === "id") {
                if (sortType === "asc") {
                    filteredTasks = sortASC(filteredTasks); 
                } else {
                    filteredTasks = sortDESC(filteredTasks);
                }
            }
            else if(filterType === "createdAt") {
                if (sortType === "asc") {
                    filteredTasks = filteredTasks.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                } else {
                    filteredTasks = filteredTasks.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                }
            }
            else if(filterType === "updatedAt") {
                if (sortType === "asc") {
                    filteredTasks = filteredTasks.sort((a, b) => a.updatedAt.getTime() - b.updatedAt.getTime());
                } else {
                    filteredTasks = filteredTasks.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
                }
            }
        }
        return filteredTasks;
    }
                
    useEffect(() => {
        const filtered = filterTasks(tasksList, filter);
        setTasks(filtered);
    }, [filter]);


    const toggleComplete = (id: number) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                    updatedAt: new Date(),
                }
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const handleComplete = (key:string) => {
        key === "completed" ? setCheckComplete(true) : setCheckComplete(false);
    };

    const handleAddTask = (newTask: string) => {
        let checkID = false;
        let id = tasks.length + 1;
        while (checkID  === false) {
           if(tasksList.some((task) => task.id === id)) {
            id++;
           } else {
            checkID = true;
           } 
        }

        const newTaskItem: Task = {
            id: id,
            title: newTask,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        setTasks([...tasks, newTaskItem]);
    }

    const handleDeleteTask = (id: number) => {  
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    const handleEditTask = (id: number, updatedTitle: string) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    title: updatedTitle,
                    updatedAt: new Date(),
                }
            }
            return task;
        });
        setTasks(updatedTasks);
        setCheckEdit(false);
    }

    return (
        <TodoLayout>
            <Title />
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCheckEdit={checkEditTask} onToggleComplete={toggleComplete} />
            <AddTask onAddTask={handleAddTask} checkEdit={checkEdit} onEditTask={handleEditTask} task={task} />
            <Fileter onComplete={handleComplete} checkComplete={checkComplete} onFilter={hanldFilter} filter={filter} />
        </TodoLayout>
    );
}
