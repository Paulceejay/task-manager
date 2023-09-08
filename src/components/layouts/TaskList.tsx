import { useEffect, useState } from "react";
import Button from "../global/Button";

import EmptyTask from "./EmptyTask";
import TaskItems from "./TaskItems";

const TaskList = ({ onOpen }) => {
  const storedItems = localStorage.getItem("tasksMgt");
  const initialItems = storedItems ? JSON.parse(storedItems) : [];
  const [items, setItems] = useState(initialItems);
  const [isEditing, setIsEditing] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState({});

  const deleteTask = (id) => {
    const updatedItems = items.filter((task) => task.id !== id);
    if (initialItems) {
      // Updatating the objects back in localStorage
      localStorage.setItem("tasksMgt", JSON.stringify(updatedItems));
    }
    window.location.reload()
  };

 

  if (items.length === 0) {
    return <EmptyTask onClick={onOpen} />;
  }

  if (items.length > 0) {
    return (
      <>
        <div className="flex justify-between w-11/12 my-10 sm:flex-row flex-col">
          <p className="text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl">
            You have a Total of {items.length} Tasks
          </p>
          <Button onClick={onOpen} className="bg-yellow-500 text-base px-4">
            Add More Task
          </Button>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-4 gap-2">
          {items.map((task) => (
            <TaskItems
              onDelete={() => deleteTask(task.id)}
              key={task.id}
              date={task.date}
              message={task.message}
              title={task.title}
            />
          ))}
        </div>
 
      </>
    );
  }
};

export default TaskList;