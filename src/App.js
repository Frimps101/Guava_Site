import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Team from "./pages/Team";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
