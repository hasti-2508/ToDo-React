import React, { useState } from 'react';
import List from './List';

function ToDo() {
  const [change, setChange] = useState('');
  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const [tasks, setTasks] = useState([]);
  const handleTask = () => {
    setTasks((prev) => [...prev, { text: change, completed: false }]);
    setChange('');
  };

  return (
    <div  className="flex item-center justify-end gap-4 m-12 p-4 border-4 border-orange-900"> 
      <div className='w-1/3 border-4 border-orange-900 m-3 p-3'>
      <h1 className='font-condensed font-bold text-3xl tracking-wider uppercase text-orange-900 bg-clip-text'>Add Your Task</h1>
      <input  className="mt-5 border-2 border-orange-900 text-orange-900" type="text" onChange={handleChange} value={change} />
      <button type='button' onClick={handleTask} className="flex flex-row gap-0 mt-5 text-orange-900 border-2 border-orange-900 rounded-md pl-3 pr-3 ">Add</button>
      </div>
      <div className='w-full border-4 border-orange-900 m-3 p-3'>
      <h1 className='font-condensed font-bold text-3xl tracking-wider uppercase text-orange-900 bg-clip-text'>Your Task</h1>
      <List tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default ToDo;
