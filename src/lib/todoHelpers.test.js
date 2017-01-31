import {addTodo, findById} from './todoHelpers'

test('addTodo adds new item', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {
    id: 3, name: 'three', isComplete: false
  }
  const result = addTodo(startTodos, newTodo)

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  expect(result).toEqual(expected)
})

const clone = s => JSON.parse(JSON.stringify(s))

test('addTodo does not mutate list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {
    id: 3, name: 'three', isComplete: false
  }
  const result = addTodo(startTodos, newTodo)
  expect(result).not.toBe(startTodos)
})

test('findById', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})

