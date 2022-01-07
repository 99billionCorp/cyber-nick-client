import React, { useContext } from 'react';
import './style.scss';

import { Context } from 'context.js';
import { Link } from 'react-router-dom';

export default function Subheader() {
  const { user } = useContext(Context);
  if (user.ok && user.isAdmin) {
    return (
      <div className="adminHeader">
        <Link to="/admin/users">Пользователи</Link>
        <Link to="/admin/addCourse">Добавить курс</Link>
        <Link to="/admin/addFilm">Добавить фильм</Link>
      </div>
    );
  }
  return <></>;
}
