import React from 'react';
import CloseButtonPopup from './CloseButtonPopup.js';

function PopupWithForm (props) {

    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <CloseButtonPopup isClose={props.isClose} />
                <form className={`popup__form popup__${props.formName}`} name={props.name}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
