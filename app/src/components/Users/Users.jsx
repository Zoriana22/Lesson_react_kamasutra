import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1, photoUrl: 'https://masterpiecer-images.s3.yandex.net/164559656c6011ee8e7f3a7ca4cc1bdc:upscaled',
        followed: true, fullName: 'Vasilii', status: 'superMentor', location: { city: 'Warsaw', country: 'Poland' }
      },
      {
        id: 2, photoUrl: 'https://masterpiecer-images.s3.yandex.net/164559656c6011ee8e7f3a7ca4cc1bdc:upscaled',
        followed: false, fullName: 'Pavel', status: 'citizen', location: { city: 'Rostov', country: 'Russia' }
      },
      {
        id: 3, photoUrl: 'https://masterpiecer-images.s3.yandex.net/164559656c6011ee8e7f3a7ca4cc1bdc:upscaled',
        followed: true, fullName: 'Slava', status: 'citizen', location: { city: 'Kaliningrad', country: 'Russia' }
      },
      {
        id: 4, photoUrl: 'https://masterpiecer-images.s3.yandex.net/164559656c6011ee8e7f3a7ca4cc1bdc:upscaled',
        followed: false, fullName: 'Anatolii', status: 'citizen', location: { city: 'Los-Angeles', country: 'USA' }
      },
    ],);
  }

  return (
    <div>
      {props.users.map(u =>
        <div key={u.id} >
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ?
                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button >
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)}
    </div>
  )
}

export default Users;
//