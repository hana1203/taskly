import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { styled } from "@mui/material";

export const Dropdown = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    console.log(age);
  };

  return (
    <>
      <StyledFormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-label">Task</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={age}
          label="Task"
          onChange={handleChange}
        >
          <MenuItem value={10}>All Tasks</MenuItem>
          <MenuItem value={20}>Inprogress</MenuItem>
          <MenuItem value={30}>Completed</MenuItem>
        </Select>
      </StyledFormControl>
    </>
  );
};

const StyledFormControl = styled(FormControl)({
  backgroundColor: "#fff999",
});
