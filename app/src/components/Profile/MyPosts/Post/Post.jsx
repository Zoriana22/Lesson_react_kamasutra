import React from 'react';
import s from './Post.module.css';
import Like from './Like';

const Post = (props) => {

  return (
            <div className={s.posts}>
              <div className={s.item}>
                  <img src="https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg" alt="" />
                  { props.message }

                  <Like />
                  {/* <div>
                    <button className="likeButton">👍</button>
                    <span className="likeCount"></span> {props.likesCount}
                  </div> */}
              </div>
                    

            </div>
    
  )
}

export default Post;
