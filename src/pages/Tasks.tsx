import { CountCard } from "../components/CountCard";
import { Dropdown } from "../components/Dropdown";
import { CustomizedInputBase } from "../components/InputBar";
import { TaskCard } from "../components/TaskCard";

export const Tasks = () => {
  return (
    <>
      태스크페이지
      <CustomizedInputBase></CustomizedInputBase>
      <TaskCard></TaskCard>
      <Dropdown></Dropdown>
      <CountCard></CountCard>
    </>
  );
};
