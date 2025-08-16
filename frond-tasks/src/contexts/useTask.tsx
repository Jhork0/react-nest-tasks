import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTask = () =>{
   const contex =  useContext(TaskContext)
   if (!contex) throw new Error('El useTask debe estar dentro de TaskProvider')
    return contex
}