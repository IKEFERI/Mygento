import React from 'react';
import Popup from "../Popup";
import {text, h2, button, done} from "../Popup.module.sass"
import {usePopup} from "../PopupContext";
const Done = props => {
    const popup = usePopup();
    const popupToggle = () => {
        popup.toggle('done');
    }
    if (!popup.visible.done) return null;

    return (
        <Popup popup="done" className={done}>
            <h2 className={h2}>Спасибо, {popup.client}!</h2>
            <p className={text}>Мы скоро свяжемся с Вами!</p>
            <button onClick={popupToggle} className={button}>Понятно</button>
        </Popup>
    );
};

export default Done;