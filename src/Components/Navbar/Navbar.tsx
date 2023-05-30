import { NavLink } from "react-router-dom";
import { navBarOptions } from "../../constants/navbar.constant";

export const Navbar = () => {
  const activeStyle = "font-semibold text-lg underline underline-offset-4";

  return (
    <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        {navBarOptions
          .filter((item) => item.side === "left")
          .map((item, key) => {
            return (
              <li key={key}>
                <NavLink
                  className={({ isActive }) => (isActive ? activeStyle : "")}
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">https://www.armandorivera.tech/</li>
        {navBarOptions
          .filter((item) => item.side === "right")
          .map((item, key) => {
            return (
              <li key={key}>
                <NavLink
                  className={({ isActive }) => (isActive ? activeStyle : "")}
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        <li>Cart: 0</li>
      </ul>
    </nav>
  );
};
