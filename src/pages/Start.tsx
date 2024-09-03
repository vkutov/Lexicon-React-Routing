import { Outlet, Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
             <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Start;