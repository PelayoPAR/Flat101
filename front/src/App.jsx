import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import ProductForm from "./Components/ProductForm/ProductForm"
import ProductList from "./Components/ProductList/ProductList"
import Home from "./Components/Home/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Tap that tap!</h1>
      <Home />
      <Routes>
        <Route path="/add" element={<ProductForm />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
