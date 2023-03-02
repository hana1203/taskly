import { Task } from "../interfaces/interfaces";

const stores = localStorage.getItem("stores");
const storesParsedArr = stores ? JSON.parse(stores) : [];

export const addTaskToLocalStorage = (task: Task) => {
  storesParsedArr.push(task);
  localStorage.setItem("stores", JSON.stringify(storesParsedArr));
  console.log("애드로컬스토리지storesParsedArr", storesParsedArr);
};

export const getTaskListFromLocalStorage = (): Task[] => {
  console.log("로컬스토리지Get", storesParsedArr);
  return storesParsedArr;
};

export const updateTaskToLocalStorage = (taskCard: Task) => {
  const currentIdx = storesParsedArr.findIndex(
    (el: Task) => el.taskId === taskCard.taskId
  );
  storesParsedArr[currentIdx] = taskCard;
  localStorage.setItem("stores", JSON.stringify(storesParsedArr));
  console.log("업데이트로컬스토리지", storesParsedArr);
};
