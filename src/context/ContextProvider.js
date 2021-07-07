import React,{createContext,useState} from 'react';

const Context = createContext();

export default function ContextProvider({children}) {

    const [total, setTotal] = useState([]);

    return (
        <Context.Provider value={[total, setTotal]}>
            {children}
        </Context.Provider>
    )
}

export {Context}