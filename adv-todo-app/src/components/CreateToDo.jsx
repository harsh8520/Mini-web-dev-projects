import { useState } from "react"

const CreateToDo = ({ toDos, setToDos, filter, setFilter }) => {
    const [input, setInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const createTodo = { id: Date.now(), toDo: input, isCompleted: false }

        setToDos([...toDos, createTodo])
        setInput("")
    }

    return (
        <form onSubmit={submitHandler} className="p-5 flex gap-5 text-xl">
            <input type="text" className="light p-2" placeholder="Enter ToDo" onChange={(e) => { setInput(e.target.value) }}
                value={input} />
            <input type="submit" value="Enter" className="light px-5" />

            <select name="filter" value={filter} onChange={(e) => {
                setFilter(e.target.value)
                
            }}>
                <option className="dark" value="All">All</option>
                <option className="dark" value="Completed">Completed</option>
                <option className="dark" value="Active">Active</option>
            </select>
        </form>
    )
}

export default CreateToDo