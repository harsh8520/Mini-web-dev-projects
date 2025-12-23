
const RenderToDo = ({ toDos, setToDos, filter }) => {

    const renderByFilter = () => {
        if (filter === "All") {
            return toDos.map((toDo) => {
                return <li key={toDo.id} onClick={() => {
                    setToDos(prev => {
                        return prev.map((t) => {
                            if (t.id === toDo.id) return { ...t, isCompleted: !t.isCompleted }
                            else return t
                        })
                    })
                }}
                    className="border-1 p-3 w-fit cursor-pointer"
                >{toDo.toDo} -------- {toDo.isCompleted ? "Completed" : "Pending"}</li>
            })
        }
        else if (filter === "Completed") {
            const completedToDos = toDos.filter((toDo) => (toDo.isCompleted == true))

            return completedToDos.map((toDo) => {
                return <li key={toDo.id} onClick={() => {
                    setToDos(prev => {
                        return prev.map((t) => {
                            if (t.id === toDo.id) return { ...t, isCompleted: !t.isCompleted }
                            else return t
                        })
                    })
                }}
                    className="border-1 p-3 w-fit cursor-pointer"
                >{toDo.toDo} -------- {toDo.isCompleted ? "Completed" : "Pending"}</li>
            })
        }
        else {
            const pendingToDos = toDos.filter((toDo) => (toDo.isCompleted == false))

            return pendingToDos.map((toDo) => {
                return <li key={toDo.id} onClick={() => {
                    setToDos(prev => {
                        return prev.map((t) => {
                            if (t.id === toDo.id) return { ...t, isCompleted: !t.isCompleted }
                            else return t
                        })
                    })
                }}
                    className="border-1 p-3 w-fit cursor-pointer"
                >{toDo.toDo} -------- {toDo.isCompleted ? "Completed" : "Pending"}</li>
            })
        }
    }

    return (
        <div className="px-5">
            <ul className="flex-col gap-5">
                {renderByFilter()}
            </ul>
        </div>
    )
}

export default RenderToDo