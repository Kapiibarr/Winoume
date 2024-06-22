import { Footer } from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/Navbar/Navbar";
import Main from "./pages/Main"
import Cart from "./pages/Cart";
import About from "./pages/About";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Search from "./pages/Search";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/wine" element={<Category category = "wine"/>}/>
        <Route path="/vodka" element={<Category category = "vodka"/>}/>
        <Route path="/cognac" element={<Category category = "cognac"/>}/>
        <Route path="/rum" element={<Category category = "rum"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/search" element={<Search/>}>
          <Route path=":searchVal" element={<Search/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
