import { useEffect, useState } from "react"
import Button from "../global/Button"
import EmptyTask from "./EmptyTask"
import TaskItems from "./TaskItems"

const TaskLists = ["f"]
const TaskList = ({onOpen}) => {
    if(TaskLists.length === 0){
        return <EmptyTask onClick={onOpen} />
    }

    if(TaskLists.length > 0){
      return (
        <>
          <div className="flex justify-between w-11/12 my-10 sm:flex-row flex-col">
            <p className="text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl">
              You have a Total of {0} Task
            </p>
            <Button onClick={onOpen} className="bg-yellow-500 text-base px-4">Add More Task</Button>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2">
            <TaskItems />
            <TaskItems />
            <TaskItems />
          </div>
        </>
      );
    }
} 

export default TaskList