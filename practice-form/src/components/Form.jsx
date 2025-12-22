import { useState } from 'react';

const Form = ({ users, setUsers }) => {
    const err = {
        name: users.name.length < 3 ? "Name should be of atleast 3 characters" : "",
        password: users.password != users.confirmPassword ? "Password does not match" : "",
        email: users.email.includes('@') ? "" : "Email should include @"
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(users);
    }

    const handleName = (e) => {
        const name = e.target.value
        setUsers({ ...users, name: name })
    }

    const handlePassword = (e) => {

    }

    return (
        <form
            onSubmit={submitHandler}
            className="p-5 flex flex-col w-fit gap-3"
        >
            <input className="light p-2" required type="text" placeholder="Name" onChange={handleName}
                value={users.name} />

            <input className="light p-2" required type="email" placeholder="Email"
                onChange={(e) => { setUsers({ ...users, email: e.target.value }) }}
                value={users.email} />

            <input className="light p-2" required type="password" placeholder="Password"
                onChange={(e) => { setUsers({ ...users, password: e.target.value }) }}
                value={users.password} />

            <input className="light p-2" required type="password" placeholder="ConfirmPassword"
                onChange={(e) => { setUsers({ ...users, confirmPassword: e.target.value }) }}
                value={users.confirmPassword} />

            <input className='light px-3' type="submit" value="Submit"
                onClick={() => {  }}
            />

            <p>{err.name}</p>
            <p>{err.password}</p>
            <p>{err.email}</p>
        </form>
    )
}

export default Form