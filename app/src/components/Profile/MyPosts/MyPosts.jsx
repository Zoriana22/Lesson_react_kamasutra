import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'It is my first post', likesCount: 12},
    {id: 3, message: 'It is greate', likesCount: 15},
  ]

  let postsElements = postData.map ( p => <Post message = {p.message} likesCount = {p.likesCount} />)
   
  return (
            <div className={s.postsBlock}>
              <h3>My posts</h3>

                <div>
                  <textarea></textarea>
                </div>
                <div>
                  <button>Add post</button>
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