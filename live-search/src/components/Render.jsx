
const Render = ({ query, request }) => {
    const renderUsers = () => {
        return request.map((req) => {
            return <li key={req.id}>{req.name.includes(query) ? req.name : ''}</li>
        })
    }

    return (
        <ul className="p-5">
            {renderUsers()}
        </ul>
    )
}

export default Render