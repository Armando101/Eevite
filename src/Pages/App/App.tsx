import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AppRoutes } from "../../constants/routes.constants";
import { ShoppingCartProvider } from "../../Context/Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/CheckoutSideMenu";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
