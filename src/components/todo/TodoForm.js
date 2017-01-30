import React from 'react'

export const TodoForm = (props) => (
  <form>
    <input type="text"
      value={props.currentTodo}
      onChange={props.handleInputChange}
    />
  </form>
)
