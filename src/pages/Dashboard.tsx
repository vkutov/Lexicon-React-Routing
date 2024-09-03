import {Outlet, Link, } from "react-router-dom";
export default function Dashboard() {
    return (
    <>
        <nav>
            <Link to = "stats">Stats </Link>
            <Link to = "settings"> Settings</Link>
        </nav>
       <Outlet />
    </>
  )
}