import React from 'react';
import CloseButtonPopup from './CloseButtonPopup.js';

function PopupWithForm (props) {
    React.useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key == "Escape") {
                props.isClose()
        }}
        document.addEventListener('keydown',handleEscClose);

        return () => {
            document.removeEventListener('keydown',handleEscClose);
          };
      },);

      React.useEffect(() => {
        function handleClickOutClose(evt) {
            if (evt.target.classList.contains('popup')) {
                props.isClose()
        }}
        document.addEventListener('click',handleClickOutClose);

        return () => {
            document.removeEventListener('click',handleClickOutClose);
          };
      },);
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
