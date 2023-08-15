import { useSelector } from "react-redux"

export function Home(){
    const username = useSelector((state:any) => state.user.value.username)

    return (
        <div>
            <h1>Home, Welcome {username}</h1>
        </div>
    )
}