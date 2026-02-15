import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import InteractivePage from './pages/InteractivePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interactive" element={<InteractivePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
