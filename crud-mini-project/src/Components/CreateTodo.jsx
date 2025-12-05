import { useState } from 'react'

const CreateTodo = ({ toDos, setToDos }) => {

    const [toDo, setToDo] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        if (!toDo) { alert("Please enter a value") }
        else {
            let updatedToDo = { id: crypto.randomUUID(), toDo: toDo, isCompleted: false, isEditing:false }
            setToDos([...toDos, updatedToDo])
            setToDo('')
        }
    }

    return (
        <form className='flex    gap-5 text-xl w-full'
            onSubmit={submitHandler}
        >
            <input type="text" placeholder='Enter Todo' className='light px-3 py-2 w-full'
                onChange={(e) => { setToDo(e.target.value) }}
                value={toDo}
            />
            <input type="submit" value="Add" className='light px-5 cursor-pointer' />
        </form>
    )
}

export default CreateTodo