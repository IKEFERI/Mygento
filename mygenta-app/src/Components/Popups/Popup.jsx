import React from 'react';
import {popup_container, overlay, cross, active} from "./Popup.module.sass"
import {usePopup} from "./PopupContext";


const Popup = props => {
    const popup = usePopup();
    const popupToggle = () => {
        popup.toggle(props.popup);
    }
    return (<>
            <div onClick={popupToggle} className={overlay + ' ' + (popup.visible[props.popup] && active)}>&nbsp;</div>
            <div className={popup_container + ' ' + props.className + ' ' + (popup.visible[props.popup] && active)}>
                <span onClick={popupToggle} className={cross}>&#10005;</span>
                {props.children}
            </div>

        </>
    );
};

export default Popup;