import './App.css'
import { Navbar } from './components/Navbar'
import { SessionView } from './views/session/SessionView'
import { BrowserRouter, Routes,Route } from 'react-router'
import { AuthContextProvider } from './contexts/AuthContextProvider'
import { Inicio } from './views/inicio/Inicio'
import { Chat } from './views/chat/Chat'
function App() {
    const sala="hola bb"

  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/session' element={<SessionView />} />
      <Route path='/' element={<Inicio/>} />
      <Route path='/chat' element={<Chat sala={sala}/>}/>
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>

    </>

  )
}

export default App
