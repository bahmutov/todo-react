import React from 'react'

export const TodoList = (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo =>
        <li key={todo.id}>
          <input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
        </li>
      )}
    </ul>
  </div>
)
