import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collaborate from './pages/Collaborate'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              Collabify
            </Link>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/collaborate">Collaborate</Link></li>
            </ul>
          </div>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/collaborate" element={<Collaborate />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2025 Collabify. Empowering creator collaboration.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
