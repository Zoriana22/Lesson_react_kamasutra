import React from 'react';
import  img from '../../../img/profile-back-wild-west.jpg';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  
  return (
    <div>
          <div>
            {/* <img className='main-cont-img' src='https://cojo.ru/wp-content/uploads/2022/12/dikii-zapad-fon-2.webp' /> */}
             <img alt="prof_img" className={s.contimg} src={img} />
          </div>
          <div className={s.descriptionBlock}>
            ava+descr
          </div>
          
         
    </div>
  )
}

export default ProfileInfo;