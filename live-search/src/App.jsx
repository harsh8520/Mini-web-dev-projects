import { useState } from "react"
import Form from "./components/Form"
import Render from "./components/Render"

const App = () => {
    const [query, setQuery] = useState('')
    const [request, setRequest] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            <Form query={query} setQuery={setQuery} setRequest={setRequest} isLoading={isLoading} setIsLoading={setIsLoading} />
            <Render query={query} request={request} />
        </>
    )
}

export default App