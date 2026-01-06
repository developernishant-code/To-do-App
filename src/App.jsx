import React, { useState } from 'react'

export default function App() {
  const [showtodo, setshowtodolist] = useState([])

  const submittodo = (event) => {
    event.preventDefault()
    let todo = event.target.todoname.value.trim()

    if (!todo) return

    if (!showtodo.includes(todo)) {
      setshowtodolist([...showtodo, todo])
      event.target.reset()
    } else {
      alert("Item already exist")
    }
  }

  let todolist = showtodo.map((data, index) => {
    return (
      <Addtodolist
        value={data}
        key={index}
        indexnumber={index}
        showtodo={showtodo}
        setshowtodolist={setshowtodolist}
      />
    )
  })

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          To Do App
        </h1>

        <form onSubmit={submittodo} className="flex gap-2 mb-4">
          <input
            name="todoname"
            type="text"
            placeholder="Enter a task"
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Save
          </button>
        </form>

        <div className="outerdiv">
          <ul className="space-y-2">
            {todolist}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Addtodolist({ value, indexnumber, showtodo, setshowtodolist }) {
  let deleterow = () => {
    let finallist = showtodo.filter((v, i) => i !== indexnumber)
    setshowtodolist(finallist)
  }

  return (
    <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded border">
      <span className="text-gray-700">{value}</span>
      <span
        onClick={deleterow}
        className="text-red-500 font-bold cursor-pointer hover:text-red-700"
      >
        &times;
      </span>
    </li>
  )
}
