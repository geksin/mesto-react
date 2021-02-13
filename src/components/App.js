import './../index.css';
import iconClosePath from './../images/close_icon.svg';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';


function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  function handleEditAvatarClick(){
    setEditAvatarPopup(!isEditAvatarPopupOpen)
  }

  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  function handleEditProfileClick(){
    setEditProfilePopup(!isEditProfilePopupOpen)
  }

  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  function handleAddPlaceClick(){
    setAddPlacePopup(!isAddPlacePopupOpen)
  }

const closePopup = (e) => {
  e.target.parentNode.parentNode.parentNode.classList.remove('popup_opened');
}

  return (
    <>
    <Header />
    <Main onEditProfile={handleEditProfileClick}  onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
    <PopupWithForm name="edit-profile" formName="form_edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} isClose={closePopup}>
      <input id="profile-name" name="profile-name" type="text" className="popup__profile-input" placeholder="Имя" minLength={2} maxLength={40} required />
      <span id="profile-name-error" className="popup__profile-input-error" />
      <input id="profile-profession" name="profile-profession" type="text" className="popup__profile-input" placeholder="Вид деятельности" minLength={2} maxLength={200} required />
      <span id="profile-profession-error" className="popup__profile-input-error" />
      <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="add-card" formName="form_add" title="Новое место" isOpen={isAddPlacePopupOpen} isClose={closePopup}>
         <input id="card-name" name="card-name" type="text" className="popup__profile-input" placeholder="Название" minLength={2} maxLength={30} required />
          <span id="card-name-error" className="popup__profile-input-error" />
          <input id="card-link" name="card-link" type="url" className="popup__profile-input" placeholder="Ссылка на картинку" required />
          <span id="card-link-error" className="popup__profile-input-error" />
          <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="upload-avatar" formName="form-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} isClose={closePopup}>
      <input id="ava-link" name="card-link" type="url" className="popup__profile-input" placeholder="Ссылка на картинку" required />
      <span id="ava-link-error" className="popup__profile-input-error" />
      <button type="submit" className="popup__button-save">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm name="delete-card" formName="delete-card" title="Вы уверены?" isOpen={false} isClose={closePopup}>
      <button type="button" className="popup__button-save">Уверен на все 100%</button>
    </PopupWithForm>

    <Footer />
  </>  

  );
}

export default App;
