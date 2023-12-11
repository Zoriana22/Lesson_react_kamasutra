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

    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    alert('state was changed');
  },
  addPost() {

    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = ' ';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {

    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}




export default store;

window.store = store;
