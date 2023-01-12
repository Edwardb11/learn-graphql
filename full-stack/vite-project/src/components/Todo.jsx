import React from 'react'

const Todo = ({id,title,completed,onCompleted}) => {
  return (
    <div>
        <div>
            <input type="checkbox" value={completed} onChange={(e)=>onCompleted(id)} />
            {title}
        </div>
    </div>
  )
}

export default Todo