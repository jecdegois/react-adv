import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? 'nav-active' : '' } to={"/users"}>Users</NavLink>
            </li>
          </ul>
        </nav>
      

      <Routes>
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="users" element={<h1>users page</h1>} />
        <Route path="/" element={<h1>Home page</h1>} />

        <Route path="/*" element={<Navigate to={"/"} replace />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};
