import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductsList from "./pages/productsList/ProductsList";
import List from "./pages/list/List";

// нужно сделать так что бы посли ЛОГИНА если юзер админ то с редиректом path был admin == /admin

// <Redirect
//   to={{
//     pathname: "/login",
//     search: "?utm=your+face",
//     state: { referrer: currentLocation }
//   }}
// /> redirect with react router dom

const managersList = ["id", "width", "height"];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <Home
                mainTitle={"Admin"}
                sideBarMenu={[
                  "Home",
                  "Managers",
                  "Products",
                  "Orders",
                  "Logout",
                ]}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/managers" element={<List />} />
          <Route path="/admin/orders" element={<ProductsList />} />
          <Route path="/manager" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
