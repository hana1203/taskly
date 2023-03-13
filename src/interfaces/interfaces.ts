export interface Task {
  taskId: number;
  description: string;
  isCompleted: boolean;
}

export interface TaskListStateProps {
  tasklist: Task[];
  setTasklist: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface FilterListSetProps {
  setIsFiltered?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInprogress?: React.Dispatch<React.SetStateAction<boolean>>;
  setActivelist: React.Dispatch<React.SetStateAction<Task[]>>;
  setCompletedlist: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface FilterListDataProps {
  isFiltered: boolean;
  isInprogress: boolean;
  activelist: Task[];
  completedlist: Task[];
}
