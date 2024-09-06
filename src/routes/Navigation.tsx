import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazy-load/pages";
import { routes } from "../routes/routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            {routes.map(({name, to}) => (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to={to}
                >
                  {name}
                </NavLink>
              </li>
            ))}

   
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({path, Component}) => (
              <Route path={path} element={<Component/>} />
            ))
          }
          

          <Route path="/*" element={<Navigate to={"/lazy1"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
