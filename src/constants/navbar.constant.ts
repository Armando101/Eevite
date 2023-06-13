interface INavBarOptions {
  title: string;
  url: string;
  side: "left" | "right";
}

export const navBarOptions: INavBarOptions[] = [
  {
    title: "Shopi",
    url: "/shopi",
    side: "left",
  },
  {
    title: "All",
    url: "/",
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
