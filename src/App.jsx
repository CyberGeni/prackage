import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Humark from './pages/Humark'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/humark" element={<Humark />} />
          <Route path="*" element={<div className='flex items-center justify-center h-screen text-6xl font-semibold font-BrOmega bg-gray-800 text-gray-200'>404</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
