import Button from "../global/Button";

const EmptyTask = ({onClick}) => {
    return (
      <div className="text-gray-700 flex justify-center items-center flex-col text-center">
        <h2 className="text-black font-semibold text-lg">Task</h2>
        <p className="text-base md:text-lg font-normal">
          You do not Have any tasks available
        </p> 
        <Button onClick={onClick} className="py-2 px-4 bg-yellow-500 text-black my-5">+ Add Task</Button>
      </div>
    );
}

export default EmptyTask