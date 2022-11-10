import Image from 'next/image';


import styles from './Topbar.module.css'

const Topbar = () => {
    return ( 
        <div className={styles.topbar}>

            <div className={styles['topbar-content']}>

                <div className={styles['topbar-left']}></div>

                <div className={styles['topbar-center']}>
                    <p>free shipping on orders of $35+</p>
                </div>

                <div className={styles['topbar-right']}>
                    <div className={styles['social-wrap']}>

                        <ul className={styles['social-icons']}>

                            <li>
                                <a href='#'>
                                    <Image 
                                        className={styles['instagram-icon']} 
                                        src='/instagram.png' width={17} height={17} 
                                        alt='instagram picture'
                                    />
                                </a>
                            </li>

                            <li>
                                <a href='#'>
                                    <Image 
                                        className={styles['facebook-icon']} 
                                        src='/facebook.png' width={17} height={17} 
                                        alt='facebook picture'
                                    />
                                </a>
                            </li>

                            <li>
                            <a href='#'>
                                    <Image 
                                        className={styles['twitter-icon']} 
                                        src='/twitter.png' width={17} height={17} 
                                        alt='facebook picture'
                                    />
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className={styles['search-btn']}>
                        <a href='#'>
                             <Image 
                                className={styles['search-icon']} 
                                src='/search.png' width={17} height={17} 
                                alt='instagram picture'
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Topbar;