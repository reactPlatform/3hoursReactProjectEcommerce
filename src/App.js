import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      
      <Route path='/' element={<HomePage />}/>
      <Route path='/store' element={<StorePage />}/>
      
      <Route path='/cart' element={<CartPage />}/>
      
        
    </Routes>
    </div>
  );
}

export default App;
