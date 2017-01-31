const {addTodo, findById, toggleTodo, updateTodo} = require('./todoHelpers')
const snapshot = require('snap-shot')

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

test('findById snapshot', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const result = findById(2, startTodos)
  snapshot(result)
})

test('toggle todo', () => {
  const todo = {id: 1, name: 'one', isComplete: false}
  const result = toggleTodo(todo)
  expect(result).not.toBe(todo)
  snapshot(result)
})

test('updateTodo', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const todo = {id: 2, name: 'two updated', isComplete: true}
  const result = updateTodo(startTodos, todo)
  expect(result).not.toBe(startTodos)
  snapshot(result)
})
