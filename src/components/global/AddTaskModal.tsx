import { useEffect, useState } from "react";
import Button from "./Button"
import Modal from "./Modal"

const AddTaskModal = ({onClose}) => {
   const [taskMgtItems, setTaskMgtItems] = useState([]);
       useEffect(() => {
         localStorage.setItem("taskMgtItems", JSON.stringify(taskMgtItems));
       },[taskMgtItems])

    return (
      <Modal onClose={onClose}>
        <form className="py-5" action="">
          <p onClick={onClose} className="text-gray-500 font-semibold text-xl md:text-2xl absolute top-5 right-10">
            x
          </p>
          <h2 className="capitalize font-semibold text-xl md:text-2xl mt-5">
            Add New Task
          </h2>
          <div className="flex justify-between flex-col mt-5">
            <label
              className="capitalize font-medium text-lg md:text-xl text-black py-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              className="w-full outline-none border-2 border-gray-400 text-gray-300 text-lg px-4 h-14 rounded-lg"
              type="text"
              id="taskName"
              placeholder="Task Name"
            />
          </div>
          <div className="flex justify-between flex-col mt-5">
            <label
              className="capitalize font-medium text-lg md:text-xl text-black"
              htmlFor="taskDesc"
            >
              Your Description
            </label>
            <textarea
              className="w-full outline-none border-2 border-gray-400 text-gray-300 text-lg py-1 px-4 h-20"
              name="taskDesc"
              id="taskDesc"
              placeholder="Write Your Task Description..."
            ></textarea>
          </div>
          <div className="flex justify-between flex-col mt-5">
            <label
              className="capitalize font-medium text-lg md:text-xl text-black"
              htmlFor="taskDate"
            >
              Task Date
            </label>
            <input
              className="w-full outline-none border-2 border-gray-400 text-gray-300 text-lg px-4 h-14 rounded-lg"
              type="datetime-local"
              name="taskDate"
              id="taskDate"
            />
          </div>

          <Button className="bg-yellow-500 md:w-1-/2 w-3/4 mx-auto flex justify-center items-center rounded-xl mt-5 cursor-pointer py-2 border border-yellow-500">
            Add Task
          </Button>
        </form>
      </Modal>
    );
}

export default AddTaskModal