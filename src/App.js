import React, { useState, useEffect } from 'react';
import { Context } from 'context.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Course from './components/pages/Course';
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import SignOut from './components/auth/SignOut';
import Users from './components/admin/Users';
import Films from './components/pages/Films';
import AdminHeader from './components/admin/AdminHeader';
import AddCourse from './components/pages/AddCourse';
import AddFilm from './components/pages/AddFilm';

import './App.scss';

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem('user') || JSON.stringify({});
    setUser(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const onUserLogin = (user) => {
    setUser(user);
  };

  return (
    <Context.Provider value={{ onUserLogin, setUser, user }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AdminHeader />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/course/:id" component={Course} />

            <Route path="/auth/login" component={SignIn} />
            <Route path="/auth/register" component={SignUp} />
            <Route path="/auth/logout" component={SignOut} />
            <Route
                path="/admin/addCourse"
                component={AddCourse}
            />
            <Route path="/admin/users" component={Users} />
            <Route path="/admin/addFilm" component={AddFilm} />
            {/* <Route path={'/about'} component={About} /> */}
            {/* <Route path={'/lectures'} component={Lectures} /> */}
            {/* <Route path={'/library'} component={Libriary} /> */}
            <Route path="/films" component={Films} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}
