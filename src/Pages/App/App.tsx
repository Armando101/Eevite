import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { AppRoutes } from "../../constants/routes.constants";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
