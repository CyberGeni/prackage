import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Humark from "./pages/Humark";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./pages/Layout";
function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="App">
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="humark" element={<Humark />} />
                <Route path="pricing" element={<Pricing />} />
                <Route
                  path="*"
                  element={
                    <motion.div className="flex items-center justify-center h-screen text-6xl font-semibold font-BrOmega bg-white text-blue-500">
                      404, the page you're looking for was never here.
                    </motion.div>
                  }
                />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
