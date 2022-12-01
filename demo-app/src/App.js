import './App.css';
import Index from './pages/Index';
import Navigation from './components/layout/Navigation';
import Products from './components/product/Products';
import SiteNav from './components/layout/SiteNav';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {

  return (
    <Router>
      <div>
        <SiteNav />
        {/* <Navigation/>
        <Products/> */}
          <Routes>
                 <Route exact path='/' element={< Index />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
      </div>
    </Router>


  );
}

export default App;
