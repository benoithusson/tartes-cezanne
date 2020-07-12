import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <>
            <div className={styles.navBarContainer}>
                <div className={styles.linkContainer}>
                    <a href="#">Über uns</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#">Feinkostladen</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#">Catering</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#">Unsere Events</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#">Die Kunstgalerie</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#">Kontakt</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;