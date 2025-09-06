import { createContext,useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

//creacion del contexto
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const [isAuth,setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUser(user);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });

   
    return () => unsubscribe();
  }, []);


  return (
    <div>
      <AuthContext.Provider value={{isAuth,user}}>
        {children}
      </AuthContext.Provider>
      
    </div>
  )
}

