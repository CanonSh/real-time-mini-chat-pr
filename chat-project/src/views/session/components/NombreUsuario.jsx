import { useContext } from "react"
import { auth } from "../../../repositories/firebase/config";
import { updateProfile } from "firebase/auth";


export const NombreUsuario = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      
    </div>
  )
}
