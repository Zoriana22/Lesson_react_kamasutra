import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <StoreContext.Provider value={store}>

            <App />

        </StoreContext.Provider>


    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);









reportWebVitals();




