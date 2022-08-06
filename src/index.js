import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PeopleList from './PeopleList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeopleList />
  </React.StrictMode>
);
