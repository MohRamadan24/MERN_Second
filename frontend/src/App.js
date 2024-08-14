import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Method from './pages/MethodologiesSection'
import Navbar from './components/Navbar'


import './utils/iconLibrary';  // Import the icon library configuration



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/Method" 
              element={<Method />} 
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
