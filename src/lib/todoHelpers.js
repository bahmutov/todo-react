export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generateId = () => Math.floor(Math.random() * 10000)

export const findById = (id, todos) =>
  todos.find(t => t.id === id)

export const toggleTodo = todo =>
  ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (todos, todo) =>
  todos.map(t => t.id === todo.id ? {...t, ...todo} : t)

const filters = {
  '/active': todo => !todo.isComplete,
  '/complete': todo => todo.isComplete,
}
const I = x => x
export const filterTodos = (todos, how) =>
  todos.filter(filters[how] || I)
