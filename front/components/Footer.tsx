import Image from 'next/image';

import styles from './Footer.module.css'

const Footer = () => {
    return ( 
        <div>
            <div className="h-[245px] w-full bg-[#101020]">

                <div className={styles['footer-wrapper']}>
                    <div className={styles['aside-wrapper']}>

                        <div className={`${styles.aside} ${styles.aside1}`}>
                            <h2>ABOUT</h2>
                            <div className={styles['aside-content']}>
                                <ul>
                                    <li>THE COMPANY</li>
                                    <li>FAQ</li>
                                    <li>PRIVACY POLICY</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles.aside} ${styles.aside2}`}>
                            <h2>LOCATIONS</h2>
                            <div className={styles['aside-content']}>
                                <ul>
                                    <li>NOVI SAD</li>
                                    <li>BEOGRAD</li>
                                    <li>ZAJECAR</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles.aside} ${styles.aside3}`}>
                            <h2>FOLLOW ALONG</h2>
                            <div className={styles['aside-content']}>

                                <ul className={styles['social-icons']}>
                                    <li>
                                        <a href='#'>
                                            <Image 
                                                className={styles['instagram-icon']} 
                                                src='/instagram.png' width={22} height={22} 
                                                alt='instagram picture'
                                            />
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>
                                            <Image 
                                                className={styles['facebook-icon']} 
                                                src='/facebook.png' width={22} height={22} 
                                                alt='facebook picture'
                                            />
                                        </a>
                                    </li>

                                    <li>
                                    <a href='#'>
                                            <Image 
                                                className={styles['twitter-icon']} 
                                                src='/twitter.png' width={22} height={22} 
                                                alt='facebook picture'
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="h-[88px] w-full bg-[#101020]">
                <div className={styles['footer-info-wrap']}>

                    <div className={styles['footer-content-left']}>
                        <div className={styles['footer-inner-content']}>                      
                            <p>© 2020 AMAYA. ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                    <div className={styles['footer-content-middle']}>
                        <div className={styles['footer-inner-content']}>                       
                            <p>LOGO</p>
                        </div>
                    </div>
                    <div className={styles['footer-content-right']}>
                        <div className={styles['footer-inner-content']}>                       
                            <p>BECAUSE WE LOVE COFFE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;