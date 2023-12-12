const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    if (action.type === ADD_POST) {

      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ' ';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = ' ';
      this._state.dialogsPage.messages.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST,  })
export const updateNewPostTextActionCreator = (text) => 
  ({ type: UPDATE_NEW_POST_TEXT, newText: text,})

export const sendMessageCreator = () => ( {type: SEND_MESSAGE,  })
export const updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body,})






export default store;

window.store = store;

//25:55
// function duckDuckGoose(players, goose) {
  
//   return players[(goose-1)%players.length].name
// }