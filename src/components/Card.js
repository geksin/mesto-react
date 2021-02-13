
import React from 'react';

function Card (props) {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <div className="card__template">
            <article className="element">
                <img className="element__photo" src={props.card.link} title="Фото пользователя" alt="Фото пользователя" onClick={handleClick} />
                <button type="button" class="element__button-delete"></button>
                <div className="element__down-part">
                <h2 className="element__name">{props.card.name}</h2>
                    <div className="element__like">
                        <button type="button" class="element__button-like"></button>
                          <span className="element__button-like-counter">{props.card.likes.length}</span> 
                    </div>
                </div>
            </article>
        </div>
        );
}

export default Card;




