import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redax/state';
import { addPost } from './redax/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

addPost();

root.render(
  // <React.StrictMode>
    <App state={state}  addPost={addPost} />
  // </React.StrictMode>
);


reportWebVitals();
