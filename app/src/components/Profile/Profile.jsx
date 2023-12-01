import React from 'react';
import  img from '../../img/profile-back-wild-west.jpg';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
          <div>
            {/* <img className='main-cont-img' src='https://cojo.ru/wp-content/uploads/2022/12/dikii-zapad-fon-2.webp' /> */}
             <img alt="prof_img" className={s.contimg} src={img} />
          </div>
          <div>
            ava+descr
          </div>
          <MyPosts />
         
    </div>
  )
}

export default Profile;