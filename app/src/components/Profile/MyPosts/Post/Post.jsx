import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
            <div className={s.posts}>
              <div className={s.item}>
                  <img src="https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg" alt="" />
                  Post 1
                  <span>Like</span>
              </div>
                    

            </div>
    
  )
}

export default Post;
