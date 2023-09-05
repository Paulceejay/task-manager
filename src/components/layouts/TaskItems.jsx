import Button from "../global/Button"

const TaskItems = () => {
    return (
        <li className="bg-gray-200 rounded-xl p-4 lg:w-96 md:w-11/12 list-none">
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-xl md:text-2xl">
              title
            </h2>
            <p className="flex justify-center items-center text-lg font-normal text-gray-500">
              Due date: 20-9-2023
            </p>
          </div>
          <p className="my-2 text-lg font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            doloribus nostrum eligendi autem odit excepturi.
          </p>
          <div className="flex sm:justify-around justify-between">
            <Button className="border-2 border-yellow-500 px-4 hover:bg-yellow-500">
              Edit
            </Button>
            <Button className="bg-yellow-500 border-2 border-yellow-500 px-4 hover:bg-white">
              Delete
            </Button>
            <Button className="border-2 border-yellow-500 px-4 hover:bg-yellow-500">
             Done
            </Button>
          </div>
        </li>
    );
}

export default TaskItems