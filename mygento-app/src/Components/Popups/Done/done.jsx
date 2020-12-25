import React from 'react';
import Popup from '../popup';
import { text, h2, button, done } from '../Popup.module.sass';
import { usePopup } from '../popup-context';
const Done = () => {
  const popup = usePopup();
  const popupToggle = () => {
    popup.popupToggle('done');
  };
  if (!popup.visible.done) return '';
  return (
    <Popup popupName="done" className={done}>
      <h2 className={h2}>Спасибо, {popup.client}!</h2>
      <p className={text}>Мы скоро свяжемся с Вами!</p>
      <button onClick={popupToggle} className={button}>
        Понятно
      </button>
    </Popup>
  );
};

export default Done;
