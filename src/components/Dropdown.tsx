import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { styled } from "@mui/material";
import { TaskListStateProps } from "../interfaces/interfaces";
import { getTaskListFromLocalStorage } from "../api/storage";

export const Dropdown = ({ tasklist, setTasklist }: TaskListStateProps) => {
  const storedTaskList = getTaskListFromLocalStorage();
  const [filterName, setFilterName] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setFilterName(event.target.value);
    if (event.target.value === "inprogress") {
      setTasklist(storedTaskList.filter((el) => el.isCompleted === false));
    } else if (event.target.value === "completed") {
      setTasklist(storedTaskList.filter((el) => el.isCompleted === true));
    } else setTasklist(storedTaskList);
  };
  console.log(filterName);
  console.log("드롭다운tasklist", tasklist);

  return (
    <>
      <StyledFormControl
        sx={{
          mt: 2,
          mb: 2,
          width: [160, 400],
          maxWidth: 160,
        }}
        size="small"
      >
        <InputLabel id="select-label">Task</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={filterName}
          label="Task"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All Tasks</MenuItem>
          <MenuItem value={"inprogress"}>Inprogress</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
      </StyledFormControl>
    </>
  );
};

const StyledFormControl = styled(FormControl)({
  // backgroundColor: "#fff999",
});
