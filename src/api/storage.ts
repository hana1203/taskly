import { Task } from "../interfaces/interfaces";

const stores = localStorage.getItem("stores");
const storesObj = stores ? JSON.parse(stores) : [];

export const addTaskToLocalStorage = (task: Task) => {
  storesObj.push(task);
  localStorage.setItem("stores", JSON.stringify(storesObj));
  console.log("애드로컬스토리지storesObj", storesObj);
};

export const getTaskListFromLocalStorage = (): Task[] => {
  console.log("로컬스토리지Get", storesObj);
  return storesObj;
};

export const updateTaskToLocalStorage = (taskCard: Task) => {
  const currentIdx = storesObj.findIndex(
    (el: Task) => el.taskId === taskCard.taskId
  );
  storesObj[currentIdx] = taskCard;
  localStorage.setItem("stores", JSON.stringify(storesObj));
  console.log("업데이트로컬스토리지", storesObj);
};
