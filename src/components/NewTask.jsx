import { useState } from "react";

export default function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleTaskChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick(){
    if(enteredTask.trim() === " "){
        return;
    }
    onAdd(enteredTask)
    setEnteredTask('');
  }

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        onChange={handleTaskChange}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      ></input>
      <button onClick={handleClick} className="text-stone-700 hover:test-stone-950">Add Task</button>
    </div>
  );
}
