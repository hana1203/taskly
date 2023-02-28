import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getTaskListFromLocalStorage } from "../api/storage";
import { CountCard } from "../components/CountCard";
import { Dropdown } from "../components/Dropdown";
import { InputSearchBar } from "../components/InputSearchBar";
import { Modal } from "../components/Modal";
import { TaskCard } from "../components/TaskCard";
import { Task } from "../interfaces/interfaces";

export const TasksList = () => {
  const [tasklist, setTasklist] = useState<Task[]>(
    getTaskListFromLocalStorage()
  );
  let lenOfTaskList = getTaskListFromLocalStorage().length;

  // useEffect(() => {
  //   getTaskListFromLocalStorage();
  // }, [tasklist]);
  // console.log("taskListFromStorage", taskListFromStorage);
  console.log("최상위tasklist", tasklist);

  return (
    <>
      <Container
        sx={{
          // maxWidth: "sm",
          width: [360, 480, 800],
          backgroundColor: "background.default",
          // minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "36px",
          marginBottom: "36px",
          paddingTop: "36px",
          paddingBottom: "36px",
          borderRadius: "16px",
        }}
      >
        <Modal tasklist={tasklist} setTasklist={setTasklist}></Modal>
        <InputSearchBar
          placeholder="Search"
          tasklist={tasklist}
          setTasklist={setTasklist}
        ></InputSearchBar>
        <Box
          sx={{
            m: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Dropdown tasklist={tasklist} setTasklist={setTasklist}></Dropdown>
          <CountCard lenOfTaskList={lenOfTaskList}></CountCard>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "16px",
            boxShadow: 2,
            pt: 2,
            pb: 2,
            minHeight: "40vh",
            // backgroundColor: "secondary.main",
          }}
        >
          {tasklist.map((el) => (
            <TaskCard
              key={el.taskId}
              taskId={el.taskId}
              description={el.description}
              isCompleted={el.isCompleted}
              setTasklist={setTasklist}
              tasklist={tasklist}
            ></TaskCard>
          ))}
        </Box>
      </Container>
    </>
  );
};
