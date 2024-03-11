import { BrowserRouter } from 'react-router-dom'
import { AuthWrapper } from './context/auth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  )
}

export default App
