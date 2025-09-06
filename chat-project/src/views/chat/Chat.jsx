import { addDoc, collection,onSnapshot,orderBy,query,serverTimestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db} from "../../repositories/firebase/config";
import { useParams } from "react-router";


export const Chat = () => {
    const formatTime = (ts) => {
    if (!ts) return "";
    try {
      const date = ts.toDate ? ts.toDate() : new Date(ts.seconds * 1000);
      return date.toLocaleTimeString();
    } catch {
      return "";
    }
  };
  const [mensaje,setMensaje]=useState("")
  const [mensajes,setMensajes]= useState([])


  const {codigoSala} = useParams();
  const mensajesref=collection(db,"mensajes")

  useEffect(()=>{
    const queryMensajes=query(mensajesref,where("sala","==",codigoSala),orderBy("fecha"))
    const unsubscribe= onSnapshot(queryMensajes,(snapshot)=>{
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
      userUid: auth.currentUser? auth.currentUser.uid : "usuario no registrado",
      username: auth.currentUser? auth.currentUser.displayName :"usuario no registrado",
      sala: codigoSala,
    });
    setMensaje("")

    console.log(mensaje);
  }
  return (
    <div className="container py-3">
      <section className="border rounded-3 p-3 mb-3 bg-light" style={{ height: "400px", overflowY: "auto" }} >
        {mensajes.map(mensaje=>(
        <div key={mensaje.id} className="mb-3" >
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">{mensaje.username ? mensaje.username : "anonimo"}</span>
            <span className="text-muted small">{formatTime(mensaje.fecha)}</span>
            </div>
            <div className="p-2 mt-1 bg-white rounded shadow-sm">{mensaje.text}</div>
            </div>
          ))}       
      </section>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" placeholder="Escribe un mensaje" onChange={(e)=>{
          setMensaje(e.target.value)
        }} value={mensaje}/>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </div>
  )
}
