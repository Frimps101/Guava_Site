import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Resources from './pages/Resources';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="company" element={ <Company/> } />
        <Route path="resources" element={ <Resources/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="faqs" element={ <Faqs/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </div>
    
  );
}

export default App;