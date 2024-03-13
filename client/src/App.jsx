import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <main className="bg-black">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App
