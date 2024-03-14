import { Route, Routes } from 'react-router-dom'
import {
  AuthProvider,
  ProtectedEmployee,
  ProtectedEmployer,
  ProtectedRoute
} from './context/auth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import SavedJobsPage from './pages/SavedJobsPage'
import CreatedJobsPage from './pages/CreatedJobsPage'
import CreateJobPage from './pages/CreateJobPage'

function App() {
  return (
    <main className="bg-black w-full h-auto min-h-screen relative pb-24">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route
            index
            element={
              <ProtectedRoute>
                <ProtectedEmployee>
                  <HomePage />
                </ProtectedEmployee>
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

          <Route
            path="saved-jobs"
            element={
              <ProtectedRoute>
                <ProtectedEmployee>
                  <SavedJobsPage />
                </ProtectedEmployee>
              </ProtectedRoute>
            }
          />

          <Route
            path="created-jobs"
            element={
              <ProtectedRoute>
                <ProtectedEmployer>
                  <CreatedJobsPage />
                </ProtectedEmployer>
              </ProtectedRoute>
            }
          />

          <Route
            path="create-job"
            element={
              <ProtectedRoute>
                <ProtectedEmployer>
                  <CreateJobPage />
                </ProtectedEmployer>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default App
