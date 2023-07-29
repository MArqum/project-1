import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './component/login';
import About from './component/about';
import Home from './component/Home';
function App() {
// let component
// switch (window.location.pathname) {
//   case "/":
//     component = <Login/>
//     break;
//     case "/Home":
//     component = <Home/>
//     break;
//     case "/Aboutus":
//     component = <About/>
//     break;
// }
  return (
    <BrowserRouter>
    
    <Navbar title='Drone' aboutus= 'About Drone'/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/aboutus' Component={About}/>
    </Routes> 
    <Routes>
      <Route path='/login' Component={Login}/>
    </Routes> 
    
    {/* {component} */}
     
     
    </BrowserRouter>
  );
}

export default App;

