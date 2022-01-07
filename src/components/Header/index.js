import React, { useContext } from 'react';
import { Context } from 'context';
import './style.scss';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo from '../Logo';
import logoPath from '../../img/cyberIzbushkaBlue.png';

import Button from '../Button';

function DropdownBtn({ login }) {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Меню">
        <Dropdown.Item href="/lectures">Лекции</Dropdown.Item>
        <Dropdown.Item href="/library">Библиотека</Dropdown.Item>
        <Dropdown.Item href="/films">Учебные фильмы</Dropdown.Item>
        {login ? (
          <Dropdown.Item
            href="/auth/logout"
            style={{ borderTop: '2px solid #80aaff' }}
          >
            Выйти
          </Dropdown.Item>
        ) : (
          <></>
        )}
      </DropdownButton>
    </div>
  );
}

function Greetings({ name }) {
  const time = new Date();
  const hours = time.getHours();

  if (hours >= 0 && hours < 6) {
    return (
      <span className="greetings">
        Доброй ночи
        {name}
      </span>
    );
  } if (hours >= 6 && hours < 12) {
    return (
      <span className="greetings">
        Доброе утро
        {name}
      </span>
    );
  } if (hours >= 12 && hours < 18) {
    return (
      <span className="greetings">
        Добрый день
        {name}
      </span>
    );
  } if (hours >= 18 && hours < 24) {
    return (
      <span className="greetings">
        Добрый вечер
        {name}
      </span>
    );
  }
}

export default function Header() {
  const { user } = useContext(Context);

  // const usetLogin = onUserLogin();

  function SignButtons() {
    return !user.ok ? (
      <div className="header_right-part">
        <Button
          label="Войти"
          href="/auth/login"
          bgc="rgb(26, 142, 250)"
        />
        <Button
          label="Регистрация"
          href="/auth/register"
          bgc="rgb(24, 107, 185)"
        />
      </div>
    ) : (
      <></>
    );
  }

  return (
    <div className="header">
      <div className="header_left-part">
        <Logo className="logo" path={logoPath} />
        <DropdownBtn className="btn header__btn" login />
      </div>
      <SignButtons />
      {user.ok ? <Greetings name={user.name || user.login} /> : <></>}
    </div>
  );
}
