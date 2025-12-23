import CreateToDo from "./components/CreateToDo"
import RenderToDo from "./components/RenderToDo"
import { useState } from "react"

const App = () => {
    const [toDos, setToDos] = useState([])
    const [filter, setFilter] = useState("All")

    return (
        <>
            <CreateToDo toDos = {toDos} setToDos = {setToDos} filter = {filter} setFilter = {setFilter}/>
            <RenderToDo toDos = {toDos} setToDos = {setToDos} filter = {filter}/>
        </>
    )
}

export default App