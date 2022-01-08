import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ALL_CURSES_URL } from 'constants.js';

export default function CourseList() {
  // Получение списка курсов

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(ALL_CURSES_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(async (e) => {
      setCourses(await e.json());
    });
  }, []);

  return (
    <div className="course-list">
      {courses.map((e) => {
        console.log(e);
        return (
          <Link to={`/course/${e.link}`} key={e.link}>
            <div className="course">
              <div
                className="course__img"
                style={{
                  backgroundImage: `url(${
                    e.backgroundImageLink || ''
                  })`,
                }}
              />
              <p
                style={{
                  color: e.courseNameColor,
                }}
              >
                {e.courseName}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
