import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import InfoCourse from 'components/Info_course';
import SideMenu from 'components/SideMenu';
import './style.scss';
import {BASE_URL} from "constants.js";

export default function Course({ match }) {
  const courseId = match.params.id;

  const [course, setCourse] = useState({});

  const user = JSON.parse(localStorage.getItem('user'));

  const [lecture, setLecture] = useState('');

  useEffect(() => {
    fetch(`${BASE_URL}/courses/${courseId}/${user.login}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    }).then(async (e) => {
      const course = await e.json();
      setCourse(course);
      setLecture(`${course.linkOnTrialVideo}`);
    });
  }, []);

  const onVideoChange = (link) => {
    link && setLecture(link);
  };

  return (
    <div className="Course">
      <div className="Course__view">
        <ReactPlayer
          className="Course__view-ReactPlayer"
          url={lecture}
          width="100%"
          height="400px"
          controls
        />
        <InfoCourse
          className="Info_course"
          shortDescription={course.shortDescription}
          description={course.description}
        />
      </div>
      <SideMenu
        className="SideMenu"
        modules={course.modules}
        onVideoChange={onVideoChange}
      />
    </div>
  );
}
