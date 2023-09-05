import { useState } from "react";
import AddTaskModal from "../global/AddTaskModal";
import Header from "./Header"
import TaskList from "./TaskList.tsx";

const Layout = () => {
    const [addModal, setAddModal] = useState(false)
    const onCloseHandler = () => {
        setAddModal((prev => !prev))
    }

     const onOpenHandler = () => {
        setAddModal(true)
    }
  return (
    <>
      <Header />
      <main className="max-w-screen-xl w-11/12 mx-auto md:mt-20 flex justify-center items-center flex-col">
        <TaskList onOpen={onOpenHandler} />
        {addModal && <AddTaskModal onClose={onCloseHandler} />}
      </main>
    </>
  );
}

export default Layout