import React, { useState, useEffect } from 'react';
import Lecture from './Lecture';

export default function Lectures({ n, changeModule }) {
  const arr = [];

  const [lectures, setLectures] = useState([]);

  const onLecturesChange = (id, lecture) => {
    setLectures([
      ...lectures.slice(0, id),
      lecture,
      ...lectures.slice(id + 1),
    ]);
  };

  useEffect(() => {
    changeModule('lectures', lectures);
  }, [lectures]);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    arr.push(
      // eslint-disable-next-line react/jsx-filename-extension
      <Lecture num={i} onLacturesChange={onLecturesChange} key={i} />,
    );
  }

  return arr;
}
