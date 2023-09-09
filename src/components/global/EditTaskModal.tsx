import { useEffect, useState } from "react";
import UseAddTask from "../../hooks/useAddTask";
import Button from "./Button";
import Modal from "./Modal";

const currentDate = new Date().toJSON().slice(0, 10);

const EditTaskModal = ({ onClose, taskToEdit, editingTask, onUpdate }) => {
  const [success, setSuccess] = useState(false);
   const [taskId, setTaskId] = useState(null);
  const {
    value: enteredTitle,
    setEnteredValue: setEnteredTitle,
    valueChangeHandler: titleChangeHandler,
  } = UseAddTask((value) => value.trim() !== "");
  const {
    value: enteredDesc,
    setEnteredValue: setEnteredDesc,
    valueChangeHandler: descChangeHandler,
  } = UseAddTask((value) => value.trim() !== "");
  const {
    value: enteredDate,
    setEnteredValue: setEnteredDate,
    valueChangeHandler: dateChangeHandler,
  } = UseAddTask((value) => value.trim() !== "");

  // Set initial values when editing Task
  useEffect(() => {
    if (editingTask) {
      setEnteredTitle(taskToEdit.title);
      setEnteredDesc(taskToEdit.message);
      setEnteredDate(taskToEdit.date);
      setTaskId(taskToEdit.id)
    }
  }, [editingTask]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const formData = {
      title: enteredTitle,
      message: enteredDesc,
      date: enteredDate,
      id: taskId
    };
    
    setSuccess(true);
    onUpdate(formData);
  };
  return (
    <Modal onClose={onClose}>
      {!success && (
        <form
          onSubmit={formSubmissionHandler}
          className="py-5 overflow-scroll scroll-auto"
          action=""
        >
          <p
            onClick={onClose}
            className="text-gray-500 font-semibold text-xl md:text-2xl absolute top-5 right-10 cursor-pointer"
          >
            x
          </p>
          <h2 className="capitalize font-semibold text-xl md:text-2xl mt-5">
            Update Task
          </h2>
          <div className="flex justify-between flex-col mt-5">
            <label
              className="capitalize font-medium text-lg md:text-xl text-black py-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              className="w-full outline-none border-2 border-gray-400 text-lg px-4 h-14 rounded-lg"
              type="text"
              id="taskName"
              placeholder="Task Name"
              required
              onChange={titleChangeHandler}
              value={enteredTitle}
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
              className="w-full outline-none border-2 border-gray-400 text-lg py-1 px-4 h-20"
              name="taskDesc"
              id="taskDesc"
              placeholder="Write Your Task Description..."
              required
              onChange={descChangeHandler}
              value={enteredDesc}
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
              className="w-full outline-none border-2 border-gray-400 text-lg px-4 h-14 rounded-lg"
              type="date"
              name="taskDate"
              id="taskDate"
              min={currentDate}
              required
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>

          <Button className="bg-yellow-500 md:w-1-/2 w-3/4 mx-auto flex justify-center items-center rounded-xl mt-5 cursor-pointer py-2 border border-yellow-500">
            Update Task
          </Button>
        </form>
      )}

      {success && (
        <div className="flex justify-center items-ceneter py-5">
          <p className="text-green-500 text-lg">Task Updated Successfully</p>
        </div>
      )}
    </Modal>
  );
};

export default EditTaskModal;
