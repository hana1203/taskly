import { Box, Checkbox, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { updateTaskToLocalStorage } from "../api/storage";
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
  };

  const updateCurrentTask = (
    paramId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentTask = tasklist.find((el) => el.taskId === paramId);
    if (currentTask) {
      setCurrentCard({ ...currentTask, isCompleted: e.target.checked });
      // setTasklist(
      //   tasklist.map((task) => {
      //     if (task.taskId === paramId) {
      //       return { ...task, isCompleted: e.target.checked };
      //     } else {
      //       return task;
      //     }
      //   })
      // );
    }
  };
  console.log("태스크카드에서 tasklist ", tasklist);

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
        width: [300, 400, 720],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Checkbox
        checked={isChecked}
        onChange={handleChange}
        color={"error"}
      ></Checkbox>
      <Paper
        elevation={0}
        sx={{ p: 1, width: [], backgroundColor: "secondary.main" }}
      >
        {description}
      </Paper>
    </Box>
  );
};
