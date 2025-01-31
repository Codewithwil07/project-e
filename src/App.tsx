import { Outlet } from 'react-router'
import { AuthProvider } from './page/context/authContext'
const App = () => {
  return (
    <AuthProvider>
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  )
}

export default App
