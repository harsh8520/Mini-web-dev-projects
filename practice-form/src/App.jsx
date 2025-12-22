import { createContext, useState } from 'react'
import Form from './components/Form'

export const userContext = createContext([])
const App = () => {
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    return (
        <>
            <Form
                users={users}
                setUsers={setUsers} />

        </>
    )
}

export default App