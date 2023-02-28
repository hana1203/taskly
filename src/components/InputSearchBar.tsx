import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { getTaskListFromLocalStorage } from "../api/storage";
import { TaskListStateProps } from "../interfaces/interfaces";

interface Props {
  placeholder: string;
}
export const InputSearchBar = ({
  placeholder,
  tasklist,
  setTasklist,
}: Props & TaskListStateProps) => {
  const storedTaskList = getTaskListFromLocalStorage();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setTasklist(
      storedTaskList.filter((el) => el.description.includes(e.target.value))
    );
  };

  const onClickCloseIcon = () => {
    setSearchInput("");
    setTasklist(storedTaskList);
  };
  console.log("서치인풋", searchInput);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: [300, 400],
        //300px in mobile, 400px in desktop
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "input" }}
        onChange={handleSearchOnChange}
        value={searchInput}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClickCloseIcon}
      >
        {/* <SearchIcon /> */}
      </IconButton>
    </Paper>
  );
};
