import React from 'react';
import {
  popup_container,
  overlay,
  cross,
  active,
  hiding,
} from './Popup.module.sass';
import { usePopup } from './popup-context';

const Popup = properties => {
  const popup = usePopup();
  const popupToggle = () => {
    popup.popupToggle(properties.popupName);
  };
  const popupClassToggle = () => {
    return popup.visible[properties.popupName] && active;
  };
  const popupClassAnimate = () => {
    return popup.animate && hiding;
  };
  return (
    <>
      <div
        onClick={popupToggle}
        className={
          overlay + ' ' + popupClassToggle() + ' ' + popupClassAnimate()
        }
      >
        &nbsp;
      </div>
      <div
        className={
          popup_container +
          ' ' +
          properties.className +
          ' ' +
          popupClassToggle() +
          ' ' +
          popupClassAnimate()
        }
      >
        <span onClick={popupToggle} className={cross}>
          &#10005;
        </span>
        {properties.children}
      </div>
    </>
  );
};

export default Popup;
