import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="flex p-8 gap-10 font-ddr">
            <h1 className="text-6xl font-ddr font-semibold">TO DO LIST</h1>
            <div className="flex items-center text-2xl gap-6">
                <Link to={""}>Home</Link>
                <Link to={"/create"}>Create</Link>
            </div>
            
        </nav>
    )
}

export default NavBar