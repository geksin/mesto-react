import './../index.css';
import iconClosePath from './../images/close_icon.svg';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  function handleEditAvatarClick(){
    setEditAvatarPopup(true)
  }

  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  function handleEditProfileClick(){
    setEditProfilePopup(true)
  }

  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  function handleAddPlaceClick(){
    setAddPlacePopup(true)
  }

function closeAllPopup() {
  setAddPlacePopup(false);
  setEditProfilePopup(false);
  setEditAvatarPopup(false);
  setIsOpen(false);

}

const [selectedCard, setSelectedCard] = React.useState({});
const [isOpen, setIsOpen] = React.useState(false);
function handleCardClick(card){
  setSelectedCard(card);
  setIsOpen(true);
}


  return (
    <>
    <Header />
    <Main onEditProfile={handleEditProfileClick}  onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    <PopupWithForm name="edit-profile" formName="form_edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} isClose={closeAllPopup}>
      <input id="profile-name" name="profile-name" type="text" className="popup__profile-input" placeholder="Имя" minLength={2} maxLength={40} required />
      <span id="profile-name-error" className="popup__profile-input-error" />
      <input id="profile-profession" name="profile-profession" type="text" className="popup__profile-input" placeholder="Вид деятельности" minLength={2} maxLength={200} required />
      <span id="profile-profession-error" className="popup__profile-input-error" />
      <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="add-card" formName="form_add" title="Новое место" isOpen={isAddPlacePopupOpen} isClose={closeAllPopup}>
         <input id="card-name" name="card-name" type="text" className="popup__profile-input" placeholder="Название" minLength={2} maxLength={30} required />
          <span id="card-name-error" className="popup__profile-input-error" />
          <input id="card-link" name="card-link" type="url" className="popup__profile-input" placeholder="Ссылка на картинку" required />
          <span id="card-link-error" className="popup__profile-input-error" />
          <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="upload-avatar" formName="form-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} isClose={closeAllPopup}>
      <input id="ava-link" name="card-link" type="url" className="popup__profile-input" placeholder="Ссылка на картинку" required />
      <span id="ava-link-error" className="popup__profile-input-error" />
      <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="delete-card" formName="delete-card" title="Вы уверены?" isOpen={false} isClose={closeAllPopup}>
      <button type="button" className="popup__button-save">Уверен на все 100%</button>
    </PopupWithForm>

    <ImagePopup card={selectedCard} onClose={isOpen} isClose={closeAllPopup}/>
    <Footer />
  </>  

  );
}

export default App;
