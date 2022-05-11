//PACKAGES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPOSANTS
import Header from "./components/Header";

//PAGES
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/comics" />
        <Route path="/favoris" /> */}
      </Routes>
    </Router>
  );
}

export default App;
