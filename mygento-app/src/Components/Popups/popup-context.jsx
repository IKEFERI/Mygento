import React, { useContext, useState } from 'react';

const PopupContext = React.createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = properties => {
  const [isOpen, setOpen] = useState({
    done: false,
    policy: false,
  });

  const [client, setClient] = useState('');
  const setNameClient = name => setClient(() => name);

  const [animate, setAnimate] = useState(false);

  const toggle = popup =>
    setOpen(previous => {
      return { ...previous, [popup]: !previous[popup] };
    });
  const popupToggle = popupName => {
    if (isOpen.policy || isOpen.done) {
      setAnimate(state => !state);
      setTimeout(() => {
        toggle(popupName);
        setAnimate(state => !state);
      }, 250);
    } else {
      toggle(popupName);
    }
  };
  return (
    <PopupContext.Provider
      value={{
        visible: isOpen,
        popupToggle,
        client,
        setNameClient,
        animate,
        setAnimate,
      }}
    >
      {properties.children}
    </PopupContext.Provider>
  );
};
