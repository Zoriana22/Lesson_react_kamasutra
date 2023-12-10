import './index.css';
import state from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redax/state';
import { BrowserRouter, Routes, Route } from "react-router-dom";



let rerenderEntireTree = (state) => {

    root.render(

        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />


    );
};


rerenderEntireTree(state);

reportWebVitals();




