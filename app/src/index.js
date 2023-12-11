import './index.css';
import store from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(

        <App state={store.getState()}
            dispatch={store.dispatch.bind(store)} />


    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);









reportWebVitals();




