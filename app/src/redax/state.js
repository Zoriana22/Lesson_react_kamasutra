import { rerenderEntiretree } from "../render";

let state = {

  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 10 },
      { id: 2, message: 'It is my first post', likesCount: 12 },
      { id: 3, message: 'It is greate', likesCount: 15 },
    ],
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
}
export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntiretree(state);
}


export default state;