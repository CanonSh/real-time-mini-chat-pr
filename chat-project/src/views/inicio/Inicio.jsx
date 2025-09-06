import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"

export const Inicio = () => {
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()

    const onSubmitForm =(data)=>{
        console.log(data.codigo)
        navigate(`/chat/${data.codigo}`)
    }
  return (
    <div className="row justify-content-center">
        <h3 className="text-center">Bienvenido a K-chat </h3>
        <div className="card col-6">
      <section className="card-body">
        <form className="form-group" onSubmit={handleSubmit(onSubmitForm)}>
            <label className="form-label">Ingresa un codigo de sala:</label>
            <input className="form-control" type="text" placeholder="Escribe un codigo de sala" {...register('codigo')}/>
            <button className="btn btn-primary mt-2">Entrar Sala</button>
        </form>
      </section>
      </div>
    </div>
  )
}

