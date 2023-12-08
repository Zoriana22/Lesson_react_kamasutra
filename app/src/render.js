import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redax/state';


const root = ReactDOM.createRoot(document.getElementById('root'));



export let rerenderEntiretree = (state) => {

  root.render(

    <App state={state} addPost={addPost} />
    //<App state={state} addPost={(message) => alert('hi')} />

  );
};






reportWebVitals();
