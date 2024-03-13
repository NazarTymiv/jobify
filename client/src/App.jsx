import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
