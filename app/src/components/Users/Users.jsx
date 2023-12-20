import React from 'react';
import styles from './Users.module.css';
import ava from '../../assets/images/ava.jpg';


let Users = (props) => {

    let pageCount = props.totalUsersCount / props.pageSize + 1;
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>

                })}
            </div>
            {props.users.map(u =>
                <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : ava} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button >
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    );

}

export default Users;