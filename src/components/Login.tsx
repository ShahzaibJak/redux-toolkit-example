import { useState } from "react"
import { login,logout } from "../store"
import { useDispatch,useSelector } from "react-redux"

export function Login(){
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const username = useSelector((state:any) => state.user.value.username)
    return (
        <div>
            <h1>Login</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
            <button onClick={()=>dispatch(login({username:name}))} >Login</button><br></br>
            <button onClick={()=>dispatch(logout())} >Logout</button>
            <h1>Username : {username?username:""}</h1>
            {name}
        </div>
    )
}