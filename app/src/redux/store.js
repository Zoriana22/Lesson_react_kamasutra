import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 10 },
        { id: 2, message: 'It is my first post', likesCount: 12 },
        { id: 3, message: 'It is greate', likesCount: 15 },
      ],
      newPostText: 'it-kamasutra',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Vasja' },
      ],
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'I am happy' },
      ],
      newMessageBody: '',

    },

    sidebar: {},
  },
  _callSubscriber() {
    alert('state was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) { //action - объект {type: 'что сделать'}
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
    
  }
}

// export const addPostActionCreator = () => ( {type: ADD_POST,  })
// export const updateNewPostTextActionCreator = (text) => 
//   ({ type: UPDATE_NEW_POST_TEXT, newText: text,})

// export const sendMessageCreator = () => ( {type: SEND_MESSAGE,  })
// export const updateNewMessageBodyCreator = (body) => 
//     ({ type: UPDATE_NEW_MESSAGE_BODY, body: body,})






export default store;

window.store = store;

//25:55
// function duckDuckGoose(players, goose) {
  
//   return players[(goose-1)%players.length].name
// }