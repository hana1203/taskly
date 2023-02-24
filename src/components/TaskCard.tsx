import { Box, Checkbox, Paper } from "@mui/material";
import { useState } from "react";
import { Task, TaskListStateProps } from "../interfaces/interfaces";

export const TaskCard = ({
  taskId,
  description,
  isCompleted,
  tasklist,
  setTasklist,
}: Task & TaskListStateProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  console.log("isChecked", isChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    updateTaskArray(taskId, e);
  };

  const updateTaskArray = (
    paramId: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const currentTask = tasklist.find((el) => el.taskId === paramId);
    // if (currentTask) {
    //   setTasklist([...tasklist, { ...currentTask }]);
    // }
    setTasklist(
      tasklist.map((task) => {
        if (paramId === task.taskId) {
          return { ...task, isCompleted: e.target.checked };
        } else {
          return task;
        }
      })
    );
  };

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
