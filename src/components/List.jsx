import React from 'react'

function List({tasks,setTasks}) {
    const handleCheckboxChange = (index) => {
        setTasks((prev) =>
          prev.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
          )
        );
      };
      
  return (
    <div >
        {tasks.map((task, index) => (
          task.text&& (<div key={index} >
          <div className='flex flex-row gap-3 border-orange-900'><input
          className='w-1/8 text-orange-900'
            type='checkbox'
            checked={task.completed}
            onChange={() => handleCheckboxChange(index)}
          />
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='w-1/2'>{task.text}</p>
          </div>
          </div>)
        ))}

      </div>
  )
}

export default List
