import iconClosePath from './../images/close_icon.svg';
import React from 'react';

function PopupWithForm (props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__button-close" onClick={props.isClose}>
                    <img className="popup__button-close-image" src={iconClosePath} alt="кнопка закрыть" />
                </button>
                <form className={`popup__form popup__${props.formName}`} name={props.name}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
