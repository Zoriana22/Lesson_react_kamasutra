import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {

    root.render(
        <Provider store={store}>

            <App />

        </Provider>


    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);









reportWebVitals();




