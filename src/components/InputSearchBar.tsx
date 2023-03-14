import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { getTaskListFromLocalStorage } from "../api/storage";
import {
  TaskListStateProps,
  FilterListSetProps,
  FilterListDataProps,
} from "../interfaces/interfaces";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  placeholder: string;
}
export const InputSearchBar = ({
  placeholder,
  tasklist,
  setTasklist,
  setActivelist,
  setCompletedlist,
  isFiltered,
  isInprogress,
}: Props & TaskListStateProps & FilterListSetProps & FilterListDataProps) => {
  const storedTaskList = getTaskListFromLocalStorage();
  const [searchInput, setSearchInput] = useState<string>("");

  const storedActiveList = getTaskListFromLocalStorage().filter(
    (el) => el.isCompleted === false
  );
  const storedCompletedList = getTaskListFromLocalStorage().filter(
    (el) => el.isCompleted === true
  );

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    // setTasklist(
    //   storedTaskList.filter((el) => el.description.includes(e.target.value))
    // );

    //active/completed filter된 드롭다운 리스트에서 결정된 상태 기준으로 search 결과 보여주기
    if (isFiltered) {
      //필터링되어있는 상태이면
      if (isInprogress) {
        setActivelist(
          storedActiveList.filter((el) =>
            el.description.includes(e.target.value)
          )
        );
      } else {
        setCompletedlist(
          storedCompletedList.filter((el) =>
            el.description.includes(e.target.value)
          )
        );
      }
    } else {
      //필터링 없는 상태. All tasks일떄
      setTasklist(
        storedTaskList.filter((el) => el.description.includes(e.target.value))
      );
    }
  };

  const onClickCloseIcon = () => {
    setSearchInput("");
    // setTasklist(storedTaskList);
    if (isFiltered) {
      if (isInprogress) {
        setActivelist(storedActiveList);
      } else {
        setCompletedlist(storedCompletedList);
      }
    } else {
      //필터안되어있는 경우
      setTasklist(storedTaskList);
    }
  };
  console.log("서치인풋", searchInput);
  console.log("서치바 태스크리스트", tasklist);

  return (
    <Paper
      component="form"
      sx={{
        m: "16px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: [300, 400, 720],
        //300px in mobile, 400px in desktop
        alignSelf: "center",
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
        sx={{ p: 0 }}
        aria-label="search"
        onClick={onClickCloseIcon}
      >
        {searchInput && <CancelIcon sx={{ p: 0 }} />}
      </IconButton>
    </Paper>
  );
};
