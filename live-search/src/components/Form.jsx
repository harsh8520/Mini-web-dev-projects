import { useEffect } from "react"

const Form = ({ query, setQuery, setRequest, isLoading, setIsLoading }) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setIsLoading(prev => !prev)
        if (!query) return 
        const timeOut = setTimeout(async () => {
            const getRes = await fetch('https://jsonplaceholder.typicode.com/users');
            const res = await getRes.json()
            setRequest(res)
        }, 1000)

        return () => clearTimeout(timeOut)
    }, [query])

    return (
        <form onSubmit={submitHandler} className="p-5 flex gap-5" >
            <input type="text" placeholder="Enter name" className="light p-3 text-xl border"
                onChange={(e) => { setQuery(e.target.value) }}
                value={query}
            />
            <input type="submit" value="Enter" className="light px-5" />
        </form>
    )
}

export default Form