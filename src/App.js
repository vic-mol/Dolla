import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacto" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
