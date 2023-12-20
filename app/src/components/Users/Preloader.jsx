import React from 'react';
import preloader from '../../assets/images/preloader.gif'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="preloading" />
        </div>
    )
}

export default Preloader;