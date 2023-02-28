import { Box, Checkbox, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import {
  updateTaskToLocalStorage,
  getTaskListFromLocalStorage,
} from "../api/storage";
import { Task, TaskListStateProps } from "../interfaces/interfaces";

export const TaskCard = ({
  taskId,
  description,
  isCompleted,
  tasklist,
  setTasklist,
}: Task & TaskListStateProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [currentCard, setCurrentCard] = useState<Task>();
  console.log("isChecked", isChecked);
  console.log("currentCard", currentCard);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    updateCurrentTask(taskId, e);
    //동기적으로 실행안됨
    // if (currentCard) {
    //   updateTaskToLocalStorage(currentCard);
    // const updatedStoredList = getTaskListFromLocalStorage();
    // setTasklist([...updatedStoredList]);
    // }
  };

  const updateCurrentTask = (
    paramId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentTask = tasklist.find((el) => el.taskId === paramId);
    if (currentTask) {
      setCurrentCard({ ...currentTask, isCompleted: e.target.checked });
      setTasklist(
        tasklist.map((task) => {
          if (task.taskId === paramId) {
            return { ...task, isCompleted: e.target.checked };
          } else {
            return task;
          }
        })
      );
    }
    // const currentTaskIdx = tasklist.findIndex((el) => el.taskId === paramId);
    // const copiedArr = [...tasklist];
    // copiedArr[currentTaskIdx].isCompleted = e.target.checked;
    // setTasklist(copiedArr);

    // setTasklist(
    //   tasklist.map((task) => {
    //     if (paramId === task.taskId) {
    //       return { ...task, isCompleted: e.target.checked };
    //     } else {
    //       return task;
    //     }
    //   })
    // );
  };
  // console.log("태스크카드에서 tasklist ", tasklist);

  useEffect(() => {
    if (currentCard) {
      updateTaskToLocalStorage(currentCard);
    }
  }, [currentCard]);

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 1,
        p: 2,
        m: 2,
        maxWidth: 400,
        // width: [300, 400],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Checkbox checked={isChecked} onChange={handleChange}></Checkbox>
      <Paper elevation={0} sx={{ p: 1, width: [] }}>
        {description}
      </Paper>
    </Box>
  );
};
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
