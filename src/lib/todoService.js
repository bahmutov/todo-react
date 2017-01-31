const baseUrl = 'http://localhost:9000/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(r => r.json())
}

export const createTodo = todo => {
  return fetch(baseUrl, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(r => r.json())
}

export const saveTodo = todo => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(r => r.json())
}
