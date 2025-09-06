import { Link } from "react-router"
import { AuthContext } from "../contexts/AuthContextProvider"
import { useContext } from "react"
import { CerrarSesion } from "./CerrarSesion";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{isAuth ? ('Bienvenido '+user.email) :'K-chat'}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active">Home</Link>
        </li>
        { isAuth ?<CerrarSesion /> 
              :<li><Link to={'/session'} className="nav-link" >Sesion</Link></li>}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}