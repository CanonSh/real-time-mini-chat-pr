import { Link } from "react-router"

export const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a K-chat</h1>
      <Link to="/chat">Chat</Link>
    </div>
  )
}

