import React, {useContext, useState} from 'react';

const PopupContext = React.createContext();

export const usePopup = () => {
    return useContext(PopupContext);
}

export const PopupProvider = (props) => {

    const [isOpen, setOpen] = useState({
        done: false,
        policy: false
    });

    const [client, setClient] = useState('')

    const setNameClient = (name) => setClient(()=>name)

    const toggle = (popup) => setOpen(prev => {return {...prev, [popup]:!prev[popup]}})


    return <PopupContext.Provider value={{
        visible: isOpen,
        toggle,
        client: client,
        setNameClient
    }}>
        {props.children}
    </PopupContext.Provider>
}