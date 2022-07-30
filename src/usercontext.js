
import { useState } from "react";
import { createContext } from "react";
import { Provider } from "react";

let userContext = createContext();

export const UserProvider = ({children})=>{
    const[product,setproduct]=useState(0)
   
return (
    <userContext.Provider value={{product,setproduct}}>
        {children}
    </userContext.Provider>
);

};

export default userContext