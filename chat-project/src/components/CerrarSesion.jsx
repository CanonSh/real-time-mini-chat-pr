import { signOut } from "firebase/auth";
import { auth } from "../repositories/firebase/config"

export const CerrarSesion = () => { 
    const logout = async () => {
    try {
    await signOut(auth);
    console.log("Sesión cerrada");
    } catch (error) {
    console.error("Error al cerrar sesión:", error);}};

  return (
  <li className="nav-item nav-link btn" onClick={logout}>Cerrar sesión</li>
  )
}
