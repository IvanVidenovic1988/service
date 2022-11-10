import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';

const Navbar = () => {

    return ( 
        <div className={styles.header}>
            
            <div className={styles['nav-wrapper']}>
                <div className={styles['menu-wrapper']}>

                    <ul className={styles.menu}>

                        <li className='pr-[34px]'>
                            <Link href="/">
                                <p>HOME</p>
                            </Link>
                        </li>

                        <li className='pl-[18px] pr-[34px]'>
                                <p>PAGES</p>
                                <Image 
                                    className={styles['arrow-icon']} 
                                    src='/arrow.png' width={13} height={13} 
                                    alt='arrow-down picture'
                                />
                        
                            <ul className={styles.dropdown}>
                                <li>
                                    <Link href="/about">
                                        <p>ABOUT</p>
                                    </Link>
                                </li>

                                <div className={styles.splitter}></div>

                                <li>
                                    <Link href="/faq">
                                        <p>FAQ</p>
                                    </Link>
                                </li>

                                <div className={styles.splitter}></div>

                                <li>
                                    <Link href="/contact">
                                        <p>CONTACT</p>
                                    </Link>
                                </li>
                            </ul>

                        </li>

                        <li className='pl-[18px] pr-[34px]'>
                            <Link href="/articles">
                                <p>ARTICLES</p>
                                <Image 
                                    className={styles['arrow-icon']} 
                                    src='/arrow.png' width={13} height={13} 
                                    alt='arrow-down picture'
                                />
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.logo}>
                        logo
                    </div>

                    <ul className={styles.menu}>
                        <li className='px-[18px]'>
                            <p>WHOLESALE</p>
                        </li>

                        <li className='pl-[18px] pr-[34px]'>
                            <Link href="/shop">
                                <p>SHOP</p>
                                <Image 
                                    className={styles['arrow-icon']} 
                                    src='/arrow.png' width={13} height={13} 
                                    alt='arrow-down picture'
                                />
                            </Link>

                            <ul className={styles.dropdown}>
                                <li>
                                    <Link href="/shop/cart">
                                        <p>CART</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className='pl-[18px]'>
                            <p>LOCATIONS</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;