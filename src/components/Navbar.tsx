import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}