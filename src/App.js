import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Enterprise from "./pages/Enterprise";
import Guava from "./pages/Guava";
import Error from "./pages/Error";


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="guava" element={<Guava />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
