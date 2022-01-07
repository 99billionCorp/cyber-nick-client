import React from 'react';
import UsersSearch from './UsersSearch/UsersSearch';
import UsersList from './UsersList';
import './style.scss';

export default function Users() {
  return (
    <>
      <UsersSearch />
      <UsersList />
    </>
  );
}
