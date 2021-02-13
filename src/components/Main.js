import iconEditPath from './../images/edit.svg';
import iconAddPath from './../images/add.svg';

function Main (props) {


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                <div className="profile__avatar-hover" >
                    <div className="profile__avatar" onClick={props.onEditAvatar} alt="фотография Жак-Ив Кусто" /></div>
                <div className="profile__text">
                    <div className="profile__title"><h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={iconEditPath} alt="кнопка редактирования" />
                    </button>
                    </div>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}><img className="profile__icon-add" src={iconAddPath} title="кнопка добавить" alt="кнопка добавить" />
                </button>
            </section>
            <section className="elements">
            </section>
        </main>
    );

}

export default Main;