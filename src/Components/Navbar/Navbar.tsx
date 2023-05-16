import { NavLink } from "react-router-dom";

interface INavBarOptions {
  title: string;
  url: string;
  side: "left" | "right";
}

const navBarOptions: INavBarOptions[] = [
  {
    title: "Shopi",
    url: "/shopi",
    side: "left",
  },
  {
    title: "All",
    url: "/all",
    side: "left",
  },
  {
    title: "Clothes",
    url: "/clothes",
    side: "left",
  },
  {
    title: "Electronics",
    url: "/electronics",
    side: "left",
  },
  {
    title: "Furnitures",
    url: "/furnitures",
    side: "left",
  },
  {
    title: "Toys",
    url: "/toys",
    side: "left",
  },
  {
    title: "Others",
    url: "/others",
    side: "left",
  },
  {
    title: "My account",
    url: "/my-account",
    side: "right",
  },
  {
    title: "My Orders",
    url: "/my-orders",
    side: "right",
  },
  {
    title: "My Order",
    url: "/my-order",
    side: "right",
  },
  {
    title: "Sign in",
    url: "/sign-in",
    side: "right",
  },
];

export const Navbar = () => {
  const activeStyle = "font-semibold text-lg underline underline-offset-4";

  return (
    <nav className="flex justify-between item-center fixed z-10 w-full py-5 px-8 text-sm font-light">
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
