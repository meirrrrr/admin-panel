import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ManagersList from "./pages/managersList/ManagersList";
import ProductsList from "./pages/productsList/ProductsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Home />}>
            <Route path="managers" element={<ManagersList />} />
            <Route path="orders" element={<ProductsList />} />
          </Route>
          <Route path="/manager" element={<Home />}>
            <Route path="orders" element={<ProductsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
