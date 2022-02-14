import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Home from './Component/Home';
import Products from './Component/Products';
import Product from './Component/Product';
import Login from './Component/Login';


function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/Products/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
