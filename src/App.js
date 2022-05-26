import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import Logout from "./pages/Logout";
import Orders from "./pages/Orders";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import NotFound from "./pages/NotFound";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login user={user} />} />
      <Route path="/register" element={<Register user={user} />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
