import React from 'react';
import CloseButtonPopup from './CloseButtonPopup.js';


function ImagePopup(props) {
    console.log(props);
    return (
        <div className={`popup popup_image ${props.onClose ? 'popup_opened' : ''}`}>
            <div className="popup__container-image">
                <CloseButtonPopup isClose={props.isClose} />
                    <img className="popup__img" src={props.card.link} title='' alt='' />
                     <p className="popup__signature">{props.card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup;