//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import state from './redax/state';
//import { addPost } from './redax/state';
import { rerenderEntiretree } from './render';


// const root = ReactDOM.createRoot(document.getElementById('root'));



// let rerenderEntiretree = () => {

//   root.render(

//     <App state={state} addPost={addPost} />

//   );
// };

rerenderEntiretree(state);




//reportWebVitals();
