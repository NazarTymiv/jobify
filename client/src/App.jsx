import { Route, Routes } from 'react-router-dom'
import { AuthProvider, ProtectedRoute } from './context/auth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <main className="bg-black min-w-full min-h-screen">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App
