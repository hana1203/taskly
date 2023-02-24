import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import { CountCard } from "../components/CountCard";
import { Dropdown } from "../components/Dropdown";
import { CustomizedInputBase } from "../components/InputBar";
import { Modal } from "../components/Modal";
import { TaskCard } from "../components/TaskCard";
import { Task } from "../interfaces/interfaces";

export const Tasks = () => {
  const [tasklist, setTasklist] = useState<Task[]>([]);
  return (
    <>
      태스크 리스트 페이지
      <CustomizedInputBase placeholder="Search"></CustomizedInputBase>
      {/* <TaskCard>''</TaskCard> */}
      <Dropdown></Dropdown>
      <CountCard></CountCard>
      <ButtonComponent>버튼</ButtonComponent>
      <Modal tasklist={tasklist} setTasklist={setTasklist}></Modal>
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
    </>
  );
};
