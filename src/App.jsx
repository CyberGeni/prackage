import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Humark from "./pages/Humark";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/humark" element={<Humark />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-screen text-6xl font-semibold font-BrOmega bg-gray-800 text-gray-200">
                  404
                </div>
              }
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
