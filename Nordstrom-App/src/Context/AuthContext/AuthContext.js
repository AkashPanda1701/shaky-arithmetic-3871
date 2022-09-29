import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { AuthAction } from "./AuthAction";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
const [authState, dispatch] = useReducer(AuthReducer, {username:'',authStatus:false});
const [registeredUser, setRegisteredUser] = React.useState([]);

useEffect(() => {
    axios.get(`http://localhost:3000/registeredUser`).then((res) => {

      setRegisteredUser(res.data);
    });
    axios.get(`http://localhost:3000/loginUser/1`).then((res) => {
     
    if(res.data.firstName){
      dispatch({type:AuthAction.LOGIN,payload:res.data.firstName})
    }
    });
  }, []);


    return(
        <AuthContext.Provider value={{authState, dispatch,registeredUser}}>
            {children}
        </AuthContext.Provider>
    )
}