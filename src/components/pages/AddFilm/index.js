import React, { useState } from 'react';

import './style.scss';
import {ADD_FILM_URL} from "constants.js";

export default function AddFilm() {
  const [film, setFilm] = useState({ url: '', label: '' });

  const onFilmEdit = (key, data) => {
    setFilm({ ...film, [key]: data });
  };

  const sendForm = () => {
    fetch(ADD_FILM_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(film),
    });
    // window.location.reload();
  };

  return (
    <div className="addFilm">
      <form className="addFilm__form">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Название фильма:</span>
          </div>
          <input
            className="form-control"
            value={film.label}
            name="label"
            required
            aria-label="With textarea"
            onChange={({ target }) => {
              onFilmEdit('label', target.value);
            }}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Ссылка на фильм:
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            name="url"
            required
            value={film.url}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={({ target }) => {
              onFilmEdit('url', target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-success" onClick={sendForm}>
          Добавить фильм
        </button>
      </form>
    </div>
  );
}
