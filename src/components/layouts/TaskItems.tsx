import Button from "../global/Button"

const TaskItems = ({title, date, message, onDelete, onEdit}:any) => {
    return (
      <li className="bg-gray-200 rounded-xl p-4 lg:w-96 md:w-11/12 list-none">
        <div className="flex justify-between">
          <h2 className="capitalize font-medium text-xl md:text-2xl">
            {title}
          </h2>
          <p className="flex justify-center items-center text-lg font-normal text-gray-500">
            Due on: {date}
          </p>
        </div>
        <p className="my-2 text-lg font-normal">{message}</p>
        <div className="flex sm:justify-around justify-between">
          <Button onClick={onEdit} className="border-2 border-yellow-500 px-4 hover:bg-yellow-500">
            Edit
          </Button>
          <Button
            onClick={onDelete}
            className="bg-yellow-500 border-2 border-yellow-500 px-4 hover:bg-white"
          >
            Delete
          </Button>
        </div>
      </li>
    );
}

export default TaskItems