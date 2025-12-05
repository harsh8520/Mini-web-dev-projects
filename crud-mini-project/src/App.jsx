import CreateTodo from './Components/CreateTodo'
import RenderTodo from './Components/RenderTodo'
import { useState } from 'react'

const App = () => {
    const [toDos, setToDos] = useState([ 
        // { id: 1, toDo: 'read a book', isCompleted: false, isEditing:false }, Sample Values
        // { id: 2, toDo: 'gym', isCompleted: true, isEditing:false },
        // { id: 3, toDo: 'code', isCompleted: false, isEditing:false }
    ])

    return (
        <div className='flex flex-col p-5 gap-5 w-[50%]'>
            <CreateTodo
                toDos={toDos}
                setToDos={setToDos}
            />
            <RenderTodo
                toDos={toDos}
                setToDos={setToDos}
            />
        </div>
    )
}

export default App