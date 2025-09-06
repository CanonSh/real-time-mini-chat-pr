import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../repositories/firebase/config'

const schema = yup.object({
  email: yup.string().email("Porfavor ingrese un formato: email@email.com").required(),
  password: yup.string().required().min(8,"Please enter a min 8 char")
  .matches(/[A-Z]/,'Porfavor ingrese 1 letra en Mayuscula')
  .matches(/[a-z]/,'Porfavor ingrese 1 letra en Minuscula')
  .matches(/[0-9]/,'Porfavor ingrese 1 numero')
  .matches(/[!@#$%&*?.,_:<>"|]/,'Porfavor ingrese 1 caracter especial'),
  confirm_password: yup.string().oneOf([yup.ref("password"),null],'La contraseña debe coincidir')
})


export const RegisterComponent = () => {
 const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
 })

  const onSubmitForm = (data) => {
    console.log(data);
    
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  
    alert('Usuario registrado con exito')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode);
    console.log(errorMessage);
    
    // ..
  });

  }

  return (
    <div>Register
    
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label className="form-label" >Email: </label>
      <input type="email" className="form-control" name="input_email" {...register('email')} />
      <p className='text-danger'>{errors.email && errors.email.message }</p>
      <label className="form-label">Password: </label>
      <input type="password" className="form-control" name="input_password" {...register('password')}/>
      <p className='text-danger'>{errors.password && errors.password.message }</p>
      <label className="form-label">Confirm Password: </label>
      <input type="password" className="form-control" {...register('confirm_password')}/>
      <p className='text-danger'>{errors.confirm_password && errors.confirm_password.message }</p>
      <button type="submit" className='btn btn-success'>Send</button>
    </form>
    </div>
  )
}