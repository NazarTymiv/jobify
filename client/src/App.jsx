import { Route, Routes } from 'react-router-dom'
import { AuthProvider, ProtectedRoute } from './context/auth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <main className="bg-black w-full h-auto min-h-screen relative">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App
