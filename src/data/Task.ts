import {type Task } from "../types/task";
export const tasksList: Task[] = [
    {
        id: 1,
        title: "Learn TypeScript",
        completed: false,
        createdAt: new Date("2024-01-01T10:00:00Z"),
        updatedAt: new Date("2024-01-01T10:00:00Z"),
    },
    {
        id: 2,
        title: "Build a React App",
        completed: true,
        createdAt: new Date("2024-01-02T11:00:00Z"),
        updatedAt: new Date("2024-01-03T12:00:00Z"),
    },
    {
        id: 3,
        title: "Write Unit Tests",
        completed: false,
        createdAt: new Date("2024-01-04T09:30:00Z"),
        updatedAt: new Date("2024-01-04T09:30:00Z"),
    },
]