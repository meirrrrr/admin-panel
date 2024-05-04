import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListProducts from "./pages/list/ListProducts";
import ListManagers from "./pages/list/ListManagers";
import ListOrders from "./pages/list/ListOrders";
// нужно сделать так что бы посли ЛОГИНА если юзер админ то с редиректом path был admin == /admin

// <Redirect
//   to={{
//     pathname: "/login",
//     search: "?utm=your+face",
//     state: { referrer: currentLocation }
//   }}
// /> redirect with react router dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/managers" element={<ListManagers />} />
          <Route path="/admin/products" element={<ListProducts />} />
          <Route path="/admin/orders" element={<ListOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
