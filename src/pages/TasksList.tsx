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

  // let lenOfTotal = getTaskListFromLocalStorage().length;

  //filtering한 상태에서 search하면 activelist 길이 바뀌니까 길이저장할 상태따로 관리
  const [lenOfInprogress, setLenOfInprogress] = useState(
    getTaskListFromLocalStorage().filter((el) => el.isCompleted === false)
      .length
  );
  console.log("inprogress필터된 배열길이", lenOfInprogress);

  //filtering 되어있는건지 상태 저장하기
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  //active, completed 상태?
  const [isInprogress, setIsInprogress] = useState<boolean>(false);

  //active, completed 상태로 따로 저장하기
  const [activelist, setActivelist] = useState<Task[]>(
    getTaskListFromLocalStorage().filter((el) => el.isCompleted === false)
  );
  const [completedlist, setCompletedlist] = useState<Task[]>(
    getTaskListFromLocalStorage().filter((el) => el.isCompleted === true)
  );

  useEffect(() => {
    setLenOfInprogress(
      getTaskListFromLocalStorage().filter((el) => el.isCompleted === false)
        .length
    );
  }, [tasklist]);

  console.log("액티브리스트", activelist);
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
          setActivelist={setActivelist}
          setCompletedlist={setCompletedlist}
          isFiltered={isFiltered}
          isInprogress={isInprogress}
          activelist={activelist}
          completedlist={completedlist}
        ></InputSearchBar>
        <Box
          sx={{
            m: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Dropdown
            tasklist={tasklist}
            setTasklist={setTasklist}
            setIsFiltered={setIsFiltered}
            setIsInprogress={setIsInprogress}
            setActivelist={setActivelist}
            setCompletedlist={setCompletedlist}
          ></Dropdown>
          {/* <CountCard lenOfActivelist={activelist.length}></CountCard> */}
          <CountCard lenOfActivelist={lenOfInprogress}></CountCard>
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
          {isFiltered
            ? isInprogress
              ? activelist.map((el) => (
                  <TaskCard
                    key={el.taskId}
                    taskId={el.taskId}
                    description={el.description}
                    isCompleted={el.isCompleted}
                    setTasklist={setTasklist}
                    tasklist={tasklist}
                  ></TaskCard>
                ))
              : completedlist.map((el) => (
                  <TaskCard
                    key={el.taskId}
                    taskId={el.taskId}
                    description={el.description}
                    isCompleted={el.isCompleted}
                    setTasklist={setTasklist}
                    tasklist={tasklist}
                  ></TaskCard>
                ))
            : tasklist.map((el) =>
                tasklist.length === 0 ? (
                  "There are no tasks."
                ) : (
                  <TaskCard
                    key={el.taskId}
                    taskId={el.taskId}
                    description={el.description}
                    isCompleted={el.isCompleted}
                    setTasklist={setTasklist}
                    tasklist={tasklist}
                  ></TaskCard>
                )
              )}
        </Box>
      </Container>
    </>
  );
};
