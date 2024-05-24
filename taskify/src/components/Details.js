import React from 'react'

function Details({task}) {
  return (
    <div className='task-details'>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default Details