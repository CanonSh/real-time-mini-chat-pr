import { addDoc, collection,serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db} from "../../repositories/firebase/config";

export const Chat = (salaCodigo) => {
  const [mensaje,setMensaje]=useState("")

  const {sala} =salaCodigo
  const mensajesref=collection(db,"mensajes")

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(mensaje==="") return;
    await addDoc(mensajesref,{
      text: mensaje,
      fecha:serverTimestamp(),
      user: auth.currentUser.uid,
      sala: sala,
    });
    setMensaje("")

    console.log(mensaje);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Escribe un mensaje" onChange={(e)=>{
          setMensaje(e.target.value)
        }} value={mensaje}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
