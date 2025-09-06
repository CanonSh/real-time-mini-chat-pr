import { addDoc, collection,onSnapshot,orderBy,query,serverTimestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db} from "../../repositories/firebase/config";
import { useParams } from "react-router";

export const Chat = () => {
  const [mensaje,setMensaje]=useState("")
  const [mensajes,setMensajes]= useState([])

  const {codigoSala} = useParams();
  const mensajesref=collection(db,"mensajes")

  useEffect(()=>{
    const queryMensajes=query(mensajesref,where("sala","==",codigoSala),orderBy("fecha"))
    const unsubscribe= onSnapshot(queryMensajes,(snapshot)=>{console.log("nuevo mensaje")
      let mensajesarr=[]
      snapshot.forEach((doc)=>{
        mensajesarr.push({...doc.data(),id:doc.id})
      })
      setMensajes(mensajesarr)
    })
    return ()=>unsubscribe();
  },[])

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(mensaje==="") return;
    await addDoc(mensajesref,{
      text: mensaje,
      fecha:serverTimestamp(),
      user: auth.currentUser.uid,
      sala: codigoSala,
    });
    setMensaje("")

    console.log(mensaje);
  }
  return (
    <div>
      <section>
        {mensajes.map(mensaje=>(<h1>{mensaje.text}</h1>))}
      </section>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Escribe un mensaje" onChange={(e)=>{
          setMensaje(e.target.value)
        }} value={mensaje}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
