import React, {createContext, useState, useEffect} from 'react';

//initial context creation

const context = createContext(null);

export const UserProvider = ({children}) => {

    const[user, setUser] = useState(null); 
    useEffect(()=> {
        fetch("/user/me", {credentials: 'include', method: 'GET', mode: 'cors'})
        .then(res=> res.json())
        .then(res=> setUser(res))
        .catch(err=>{
            console.log(err);
        });
    },[]);


    return(
        <context.Provider value={user}>
            {children} 
        </context.Provider>
    );
};

UserProvider.context = context;
console.log("this is under UserProvider export");
console.log(context);
