import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {


  let postsElements =
    props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>
        {postsElements}

      </div>

    </div>

  )
}

export default MyPosts;

// <Post /*id={1}*/ message = {postData[0].message} likesCount = {postData[0].likesCount} />
// <Post /*id={2}*/ message = {postData[1].message} likesCount = {postData[1].likesCount} />
// <Post /*id={2}*/ message = {postData[2].message} likesCount = {postData[2].likesCount} />    