//PACKAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//COMPOSANTS
import Header from "./components/Header";

//PAGES
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
