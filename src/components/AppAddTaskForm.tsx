"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../storage/storage";
import { Task } from "@/interface/global";
import { create_UUID } from "@/utils/FuncUtils";

export function AppAddTaskForm() {
  const [textTask, setTextTask] = useState("");
  //========================================
  const dispatch = useDispatch();
  //========================================
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const NewTask: Task = {
      id: create_UUID(),
      method: "delete",
      type: "toStart",
      task: event.target[0].value,
    };
    dispatch(addNewTask(NewTask));
    setTextTask("");
  };
  //========================================
  return (
    <div className="w-full">
      <form method="POST" onSubmit={onSubmit}>
        <input
          className="bg-[#bbb]  outline-none w-[100%] p-2"
          name="newTask"
          type="text"
          placeholder="EX: tarefa 1"
          required
          value={textTask}
          onChange={(e) => setTextTask(e.target.value)}
        />
        <button className="w-[15%] p-2 hidden" type="submit"></button>
      </form>
    </div>
  );
}
