import { useEffect, useState } from 'react'
import './App.css'
import backData from './assets/back.json'

function App() {
  const [todos, setTodos] = useState()

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(backData))
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])

  function todoList() {
    const list = Object.values(todos).map((todo, index) => {
      return (
        <div className="list-element" key={index}>
          <input
            data-id={index}
            onChange={(e) => {
              // Fixed this part. I was curious about it. The assigning was the way but a bit deferent. I needed to use a deep copy because it was an object inside another, so shallow copy with "..." was a mistake too.
              // const index = parseInt(e.target.getAttribute('data-id')) + 1
              // setTodos((prev) => {
              //   const copy = structuredClone(prev)
              //   copy[index].checked = !copy[index].checked
              //   return copy
              // })
            }}
            checked={todo.checked}
            type="checkbox"
          ></input>
          <span>{todo.task}</span>
        </div>
      )
    })
    return <div className="list">{list}</div>
  }

  return (
    todos && (
      <>
        <h1>Todos</h1>
        {todoList()}
      </>
    )
  )
}

export default App
