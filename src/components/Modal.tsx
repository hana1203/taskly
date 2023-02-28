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
} from "../api/storage";
import { styled } from "@mui/system";

export const Modal = ({ tasklist, setTasklist }: TaskListStateProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string | null>();
  console.log("inputValue", inputValue);
  const [card, setCard] = useState<Task>();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCard({
      taskId: new Date().getTime(), //unique id as milliseconds
      description: e.target.value,
      isCompleted: false,
    });
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

      // setCard({
      //   taskId: new Date().getTime(), //unique id as milliseconds
      //   description: inputValue,
      //   isCompleted: false,
      // });
      if (card) {
        addTaskToLocalStorage(card);
        const storedList = getTaskListFromLocalStorage();
        setTasklist([...storedList]);
      }
    }
    setInputValue(null);
  };

  console.log("card", card);
  console.log("모달에서 tasklist 상태", tasklist);

  // useEffect(() => {
  //   if (card) {
  //     addTaskToLocalStorage(card);
  //     const storedList = getTaskListFromLocalStorage();
  //     setTasklist([...storedList]);
  //   }
  // }, [card]);

  return (
    <Wrapper>
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
        fullWidth={true}
        maxWidth={"tablet"}
      >
        <DialogTitle id="alert-dialog-title" sx={{ m: 2 }}>
          {"Add a new task"}
        </DialogTitle>
        <DialogContent sx={{ m: 1 }}>
          <DialogContentText id="alert-dialog-description">
            <OutlinedInput
              size="small"
              placeholder="new task here ✏️"
              onChange={handleOnchange}
              fullWidth={true}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-evenly", mt: 2, mb: 4 }}>
          <ButtonComponent onClick={handleCancel}>Cancel</ButtonComponent>
          <ButtonComponent onClick={handleSave}>Save</ButtonComponent>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled("div")(
  () => `text-align: end;
  margin: 16px;
  `
);
