import React from 'react'
import Todo from './Todo'

const TodoList = ({items,onComplete,itemsCompleted,totalItem}) => {
  return (
    <div>
        <div>
            {itemsCompleted} of {totalItem}
        </div>
        {
            items.map((item)=>(
                <Todo key={item.id} {...item} onCompleted={onComplete}/>
            ))
        }
    </div>
  )
}

export default TodoList