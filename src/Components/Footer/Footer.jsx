import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.list}>
                <ul>
                    <li>Adresse : Am Stadtgraben 27, 72070 Tübingen</li>
                    <li><a href="tel:07071 8598857">Tel: 07071 8598857</a></li>
                </ul>
            </div>
            <div className={styles.list}>
                <ul>
                    <li>Monday :</li>
                    <li>Tuesday :</li>
                    <li>Wednesday :</li>
                    <li>Thursday :</li>
                    <li>Friday :</li>
                    <li>Saturday :</li>
                    <li>Sunday :</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;