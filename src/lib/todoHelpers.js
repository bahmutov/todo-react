export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generateId = () => Math.floor(Math.random() * 10000)

export const findById = (id, todos) =>
  todos.find(t => t.id === id)
