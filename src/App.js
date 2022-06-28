import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SharedLayout from "./components/SharedLayout";
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
