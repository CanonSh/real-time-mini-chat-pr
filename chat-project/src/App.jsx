import './App.css'
import { Navbar } from './components/Navbar'
import { SessionView } from './views/session/SessionView'
import { BrowserRouter, Routes,Route } from 'react-router'
import { AuthContextProvider } from './contexts/AuthContextProvider'
import { Inicio } from './views/inicio/Inicio'
import { Chat } from './views/chat/Chat'
function App() {

  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/session' element={<SessionView />} />
      <Route path='/' element={<Inicio/>} />
      <Route path='/chat/:codigoSala' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>

    </>

  )
}

export default App
