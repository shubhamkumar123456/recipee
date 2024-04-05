import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import SingleRecipe from './pages/SingleRecipe';


function App() {
console.log("hello")
  return (
    <div className="App">
   <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/recipe' element={<SingleRecipe />}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
