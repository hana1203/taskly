export interface Task {
  taskId: number;
  description: string;
  isCompleted: boolean;
}

export interface TaskListStateProps {
  tasklist: Task[];
  setTasklist: React.Dispatch<React.SetStateAction<Task[]>>;
}
