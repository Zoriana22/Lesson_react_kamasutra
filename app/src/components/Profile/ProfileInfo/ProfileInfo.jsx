import React from 'react';
import img from '../../../img/profile-back-wild-west.jpg';
import s from './ProfileInfo.module.css';
import Preloader from '../../Users/Preloader';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        {/* <img className='main-cont-img' src='https://cojo.ru/wp-content/uploads/2022/12/dikii-zapad-fon-2.webp' /> */}
        <img alt="prof_img" className={s.contimg} src={img} />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small} />
        ava+descr {props.profile.fullName}
      </div>


    </div>
  )
}

export default ProfileInfo;