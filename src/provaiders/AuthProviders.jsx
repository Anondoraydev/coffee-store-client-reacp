import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null) 

const AuthProviders = ({ children }) => { 
  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);
  
  const createUser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singInUser = (email, password) => {
    setLodding(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    user,
    lodding,
    createUser,
    singInUser
    
  }
  

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;