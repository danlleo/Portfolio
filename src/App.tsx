import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import GamePage from './components/GamePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/games/:gameId' element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
