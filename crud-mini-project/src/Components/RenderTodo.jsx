const RenderTodo = ({ toDos, setToDos }) => {
    const renderTodos = toDos.map((toDo) => {


        return <li key={toDo.id} className={`flex gap-3 items-center justify-between text-2xl ${toDo.isCompleted ? 'strike' : ''
            }`}>
            <input type="checkbox"
                checked={toDo.isCompleted}
                onChange={() => {
                    setToDos(prev =>
                        prev.map(t => {
                            if (toDo.id == t.id) return { ...t, isCompleted: !t.isCompleted }
                            else return t
                        })
                    )
                }}
            />

            { toDo.isEditing ? <input type="text" className="light"
            onChange={ (e) => {
                setToDos(prev => prev.map(t => {
                    if(toDo.id == t.id) { return {...t, toDo: e.target.value} }
                    else return t
                }))
            } }
            value={toDo.toDo}
            />: toDo.toDo}

            <div className="flex gap-3">
                <button
                    onClick={() => {
                        let filteredTodo = toDos.filter(todo => todo.id != toDo.id)
                        setToDos(filteredTodo)

                    }}
                 >Remove</button>

                <button 
                onClick={()=>{
                    setToDos(prev => prev.map((t) => {
                        if(t.id == toDo.id) return {...t, isEditing: !t.isEditing}
                        else return t
                    }))
                }}
                >{toDo.isEditing ? "Close": "Edit"}</button>
            </div>
        </li>
    })

    return (
        <ul className="list-none flex flex-col justify-center gap-2">
            {renderTodos}
        </ul>
    )
}

export default RenderTodo