import iconEditPath from './../images/edit.svg';
import iconAddPath from './../images/add.svg';
import {api} from '../utils/api.js';
import React from 'react';
import Card from './Card.js';


function Main (props) {

const [userName, setUserName] = React.useState('Загрузка...');
const [userDescription, setUserDescription] = React.useState('Совсем скоро...');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getInitialCards()
          .then((values) => setCards(values))
          .catch((err)=>{     
            console.log(err);
            })
      },[]);


    React.useEffect(() => {
        api.getUserData()
        .then((values)=>{
            setUserName(values.name);
            setUserDescription(values.about);
            setUserAvatar(values.avatar);
        })
        .catch((err)=>{     
            console.log(err);
         })
      },[]);



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
                {cards.map((item) => <Card key={item._id} card={item} onCardClick={handleClickApp} onDeleteCard={props.onDeleteCard} />)}
            </section>
        </main>
    );

}


export default Main;