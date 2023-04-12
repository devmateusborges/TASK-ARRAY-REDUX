import Image from "next/image";
import { Inter } from "next/font/google";
import { AppItem } from "../components/AppItem";
import { GoFile } from "react-icons/go";
import { AppAddTaskForm } from "@/components/AppAddTaskForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full absolute bg-[#361e41] h-[30%]"></div>
      <div className="w-full  absolute z-10 h-[100vh] flex flex-col">
        <div className="W-[80%] h-[100%] flex flex-col xl:flex-row items-center justify-center xl:p-5">
          <div className="bg-white  flex flex-col rounded-lg w-[95%] xl:w-[25%] h-[70%] animation_full">
            <div className="p-2 flex items-center border border-b-2 bg-red-400 rounded-lg">
              <GoFile className="w-7 h-7 text-[#ffffff]" />
              <p className="font-bold text-[#ffffff] ml-5 xl:text-[20px]">
                A fazer
              </p>
            </div>
            <AppAddTaskForm />
            <div className="w-full h-[95%] overflow-x-auto  standard_scroll">
              <AppItem type="toStart" />
            </div>
          </div>

          <div className="bg-white  rounded-lg mx-10 w-[95%] xl:w-[25%] h-[70%]  my-5 animation_full">
            <div className="p-2 flex items-center border border-b-2 bg-yellow-400 rounded-lg">
              <GoFile className="w-7 h-7 text-[#ffffff]" />
              <p className="font-bold text-[#ffffff] ml-5 xl:text-[20px]">
                Andamento
              </p>
            </div>
            <div className="w-full h-[95%] overflow-x-auto  standard_scroll">
              <AppItem type="toProgress" />
            </div>
          </div>

          <div className="bg-white  rounded-lg w-[95%] xl:w-[25%] h-[70%] animation_full">
            <div className="p-2 flex items-center border border-b-2 bg-green-400 rounded-lg">
              <GoFile className="w-7 h-7 text-[#ffffff]" />
              <p className="font-bold text-[#ffffff] ml-5 xl:text-[20px]">
                Finalizado
              </p>
            </div>
            <div className="w-full h-[95%] overflow-x-auto  standard_scroll">
              <AppItem type="toClosed" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-white font-bold">&copy; Mateus Borges</p>
        </div>
      </div>
    </main>
  );
}
