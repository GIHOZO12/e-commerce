
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products';
// import Rice from './Pages/Rice';
// import Sugar from './Pages/Sugar';
// import Salts from './Pages/Salts';
// import MaizeFlour from './Pages/MaizeFlour';
// import Soap from './Pages/Soap';
// import Oil from './Pages/Oil';
import Login from './Pages/Login';
import Sigin from './Pages/Sigin';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';






function App() {
  return (
    <div>
  
       <Navbar/>
      <Routes>
        <Route path='/Product' element={<Products/>}/>
        <Route path='/Rice' element={<ShopCategory category='Rice'/>}/>
        <Route path='/Sugar' element={<ShopCategory category='Sugar'/>}/>
        <Route path='/Salts' element={<ShopCategory category='Salts'/>}/>
        <Route path='/MaizeFlour' element={<ShopCategory category='MaizeFlour'/>}/>
        <Route path='/soap' element={<ShopCategory category='Soap'/>}/>
        <Route path='/oil' element={<ShopCategory category='Oil'/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path=':ShopId' element={<Shop/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sigin' element={<Sigin/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
