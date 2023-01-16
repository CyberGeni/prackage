import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Humark from "./pages/Humark";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
function App() {

  return (
    <AnimatePresence mode="wait">
      <motion.div className="App">
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
                  <motion.div className="flex items-center justify-center h-screen text-6xl font-semibold font-BrOmega bg-gray-800 text-gray-200">
                    404
                  </motion.div>
                }
              />
            </Routes>
          </ScrollToTop>
        </Router>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
