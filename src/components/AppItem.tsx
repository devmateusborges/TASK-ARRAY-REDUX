"use client";

import { Task } from "@/interface/global";
import { RootState } from "@/storage";
import {
  removeTask,
  updateTask,
  updateTaskClosedAdvanced,
  updateTaskClosedBack,
  updateTaskProgressAdvanced,
  updateTaskProgressBack,
} from "@/storage/storage";
import React, { useEffect, useState } from "react";
import {
  GoArrowLeft,
  GoArrowRight,
  GoPencil,
  GoTrashcan,
  GoEyeClosed,
} from "react-icons/go";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppAddTaskForm } from "./AppAddTaskForm";

interface AppItem {
  type: "toStart" | "toProgress" | "toClosed";
}
interface AppEdit {
  active: boolean;
}

export function AppItem({ type }: AppItem) {
  const [bgColor, setBgColor] = useState("#fff");
  //========================================
  const SelectTask: any = useSelector(
    (state: RootState) => state.storage.toTask
  );
  //========================================
  const dispatch = useDispatch();
  //========================================
  useEffect(() => {
    if (type == "toStart") {
      setBgColor("#f0a7a7");
    } else if (type == "toProgress") {
      setBgColor("#d8e278");
    } else {
      setBgColor("#5ca578");
    }
  }, []);
  //========================================
  const Edit = ({ id, method, task, type }: Task) => {
    const [edit, setEdit] = useState(false);
    const [textEdit, setTextEdit] = useState("");

    useEffect(() => {
      setTextEdit(task);
    }, []);

    const dispatch = useDispatch();
    const onSubmit = async (event: any) => {
      event.preventDefault();
      const NewTask: Task = {
        id: id,
        method: method,
        type: type,
        task: event.target[0].value,
      };
      dispatch(updateTask(NewTask));
    };

    return (
      <>
        {edit == true ? (
          <div className="absolute right-1 bg-white w-full rounded-lg">
            <form className="w-full flex" onSubmit={onSubmit}>
              <input
                className="w-full outline-none rounded-lg p-1 text-black"
                type="text"
                placeholder="EX: tarefa 2"
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
              />
              <button className="w-[15%] p-2 hidden" type="submit"></button>
              <button
                onClick={() => setEdit(false)}
                className="text-green-500 animation_full"
              >
                <GoEyeClosed className="w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="text-green-500 animation_full"
          >
            <GoPencil className="w-5 h-5" />
          </button>
        )}
      </>
    );
  };

  return (
    <>
      {SelectTask.map(
        (itemTask: Task) =>
          itemTask.type == type && (
            <div
              key={itemTask.id}
              style={{ backgroundColor: bgColor }}
              className="border border-1 w-full flex flex-row p-2 relative rounded-lg items-center "
            >
              {itemTask.type == "toProgress" && (
                <button
                  onClick={() => dispatch(updateTaskProgressBack(itemTask))}
                  className="text-white mr-3 animation_full"
                >
                  <GoArrowLeft className="w-6 h-6" />
                </button>
              )}
              {itemTask.type == "toClosed" && (
                <button
                  onClick={() => dispatch(updateTaskClosedBack(itemTask))}
                  className="text-white mr-3 animation_full"
                >
                  <GoArrowLeft className="w-6 h-6" />
                </button>
              )}

              <div className="w-[50%]">
                <p className="text-[16px] text-[#747474] font-bold">
                  {itemTask.task}
                </p>
              </div>

              <div className="absolute right-2 w-[30%] flex items-center justify-center">
                {itemTask.type == "toStart" && <Edit {...itemTask} />}
                <button
                  onClick={() => dispatch(removeTask(itemTask.id))}
                  className="text-red-500 mx-5 animation_full"
                >
                  <GoTrashcan className="w-5 h-5" />
                </button>

                {itemTask.type == "toStart" && (
                  <button
                    onClick={() =>
                      dispatch(updateTaskProgressAdvanced(itemTask))
                    }
                    className="text-white animation_full"
                  >
                    <GoArrowRight className="w-6 h-6" />
                  </button>
                )}

                {itemTask.type == "toProgress" && (
                  <button
                    onClick={() => dispatch(updateTaskClosedAdvanced(itemTask))}
                    className="text-white animation_full"
                  >
                    <GoArrowRight className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          )
      )}
    </>
  );
}
