export interface Task {
    readonly id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}