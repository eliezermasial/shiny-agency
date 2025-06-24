import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Results from './pages/Results'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Quiz from './pages/Quiz'
import Profil from './components/Profil'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/quiz/:questNombre" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
