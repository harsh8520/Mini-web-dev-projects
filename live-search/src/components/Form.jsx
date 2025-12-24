import { useEffect } from "react"

const Form = ({ query, setQuery, setRequest, isLoading, setIsLoading }) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        let allowed = true
        let timeOut
        if (!query) return
        timeOut = setTimeout(async () => {
            const getRes = await fetch('https://jsonplaceholder.typicode.com/users');
            const res = await getRes.json()
            if (allowed) {
                setRequest(res)
                console.log("Success");
            }
            else {
                console.log("Did not update state");
            }
        }, 1000)

        return () => { clearTimeout(timeOut); allowed = false; }
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