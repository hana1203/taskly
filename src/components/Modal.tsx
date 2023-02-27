import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ButtonComponent } from "./ButtonComponent";
import { Task, TaskListStateProps } from "../interfaces/interfaces";
import {
  addTaskToLocalStorage,
  getTaskListFromLocalStorage,
} from "../apis/storage";

export const Modal = ({ tasklist, setTasklist }: TaskListStateProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string | null>();
  console.log("inputValue", inputValue);
  const [card, setCard] = useState<Task>();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //open modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  //close modal
  const handleClose = () => {
    setOpen(false);
    setInputValue(null);
  };

  const handleCancel = () => {
    setOpen(false);
    setInputValue(null);
  };

  const handleSave = () => {
    setOpen(false);
    if (inputValue == null) {
      window.alert("Please fill in the task.");
    }

    if (inputValue) {
      //list로 저장
      // setTasklist((current) => [
      //   ...current,
      //   {
      //     taskId: id++,
      //     description: inputValue,
      //     isCompleted: false,
      //   },
      // ]);
      setCard({
        taskId: new Date().getTime(), //unique id as milliseconds
        description: inputValue,
        isCompleted: false,
      });
    }
    setInputValue(null);
  };

  console.log("card", card);
  console.log("모달에서 tasklist 상태", tasklist);

  useEffect(() => {
    if (card) {
      addTaskToLocalStorage(card);
      const storedList = getTaskListFromLocalStorage();
      setTasklist([...storedList]);
    }
  }, [card]);

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        color="primary"
        variant="contained"
        disabled={false}
        size="large"
        sx={{ borderRadius: "64px" }}
      >
        Add a new task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add a new task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <OutlinedInput
              size="small"
              placeholder="Please enter text"
              onChange={handleOnchange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-evenly" }}>
          <ButtonComponent onClick={handleCancel}>Cancel</ButtonComponent>
          <ButtonComponent onClick={handleSave}>Save</ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};