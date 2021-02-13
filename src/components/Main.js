import iconEditPath from './../images/edit.svg';
import iconAddPath from './../images/add.svg';
import Api from '../utils/Api.js';
import React from 'react';
import Card from './Card.js';

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: 'd0d17317-fe5c-4341-9c10-713100a37209'
});


function Main (props) {

const [userName, setUserName] = React.useState('Жак ив кусто');
const [userDescription, setUserDescription] = React.useState('Исследователь');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getInitialCards()
          .then((values) => setCards(values))
          .catch((err)=>{     
            console.log(err);
            })
      },[]);


    api.getUserData()
    .then((values)=>{
        setUserName(values.name);
        setUserDescription(values.about);
        setUserAvatar(values.avatar);
    })
    .catch((err)=>{     
        console.log(err);
     })

     function handleClickApp (card) {
        props.onCardClick(card);
      } 


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                <div className="profile__avatar-hover" >
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}  onClick={props.onEditAvatar} alt="фотография Жак-Ив Кусто" /></div>
                <div className="profile__text">
                    <div className="profile__title"><h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={iconEditPath} alt="кнопка редактирования" />
                    </button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}><img className="profile__icon-add" src={iconAddPath} title="кнопка добавить" alt="кнопка добавить" />
                </button>
            </section>
            <section className="elements">
                {cards.map((item) => <Card key={item._id} card={item} onCardClick={handleClickApp} />)}
            </section>
        </main>
    );

}


export default Main;