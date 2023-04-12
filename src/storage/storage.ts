import { Task } from "@/interface/global";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const toStart: Task[] = [];
const storage = createSlice({
  name: "storage",
  initialState: {
    toTask: toStart,
  },

  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.toTask.push(action.payload);
    },
    removeTask(state, action: PayloadAction<string>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload
      );
      state.toTask = res;
    },
    updateTask(state, action: PayloadAction<Task>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload.id
      );
      const newArr = [...res, action.payload];
      state.toTask = newArr;
      console.log(newArr);
    },
    updateTaskProgressAdvanced(state, action: PayloadAction<Task>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload.id
      );
      state.toTask = res;

      const newTask: Task = {
        id: action.payload.id,
        method: action.payload.method,
        type: "toProgress",
        task: action.payload.task,
      };
      console.log(newTask);
      state.toTask.push(newTask);
    },
    updateTaskProgressBack(state, action: PayloadAction<Task>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload.id
      );
      state.toTask = res;

      const newTask: Task = {
        id: action.payload.id,
        method: action.payload.method,
        type: "toStart",
        task: action.payload.task,
      };
      state.toTask.push(newTask);
    },
    updateTaskClosedAdvanced(state, action: PayloadAction<Task>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload.id
      );
      state.toTask = res;

      const newTask: Task = {
        id: action.payload.id,
        method: action.payload.method,
        type: "toClosed",
        task: action.payload.task,
      };
      state.toTask.push(newTask);
    },
    updateTaskClosedBack(state, action: PayloadAction<Task>) {
      const res: Task[] = state.toTask.filter(
        (item) => item.id != action.payload.id
      );
      state.toTask = res;

      const newTask: Task = {
        id: action.payload.id,
        method: action.payload.method,
        type: "toProgress",
        task: action.payload.task,
      };
      state.toTask.push(newTask);
    },
  },
});

export const {
  addNewTask,
  removeTask,
  updateTaskProgressAdvanced,
  updateTaskProgressBack,
  updateTaskClosedAdvanced,
  updateTaskClosedBack,
  updateTask,
} = storage.actions;

export default storage.reducer;
