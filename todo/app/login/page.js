'use client'
import { useState } from "react"

export default ()=>{
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    
    const login=(e)=>{
        e.preventDefault()
        console.log({name,password})
    }

    return (
        <div>
            <form onSubmit={login}>
                <input onChange={(e)=>{
                    setName(e.target.value)
                }} type="text" placeholder="User Name..."/>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" placeholder="Password"/>
                <button>Hola?</button>
            </form>
        </div>
    )
}