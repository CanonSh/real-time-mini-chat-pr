import { useState } from "react"
import { RegisterComponent } from "./components/RegisterComponent"
import { LoginComponent } from "./components/LoginComponent"

export const SessionView = () => {
  const [typeForm, setTypeForm] = useState('login');

  return ( 
    <div className="row justify-content-center">
    <button className="btn btn-success col-1 m-2 p-2" onClick={() => {setTypeForm('register')}} >Sign Up</button>
    <button className="btn btn-primary col-1 m-2 p-2" onClick={()=>(setTypeForm('login'))}>Sign In</button>
    { typeForm === 'login' ?   <LoginComponent /> :  <RegisterComponent />}
    </div>
  )
}



