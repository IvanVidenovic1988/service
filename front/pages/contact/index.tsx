import styles from './contact.module.css'

const Contact = () => {
    return (     

        <div className={styles.main}>
            <div className={styles['contact-heading']}>
               <p><strong>CONTACT FORM</strong></p>
               <a 
                href='#'
               >Contact Form 7</a>
            </div>

            <div className={styles['contact-wrapper']}>

                <div className={styles['contact-container']}>

                    <form>
                        <div className={styles.label}>
                            <label>
                                <p>COMPANY</p>
                                <input
                                    className={styles.input}
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className={styles.label}>
                            <label>
                                <p>CONTACT NAME</p>
                                <input
                                    className={styles.input}
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className={styles.label}>
                            <label>
                                <p>YOUR EMAIL</p>
                                <input
                                    className={styles.input}
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className={styles.label}>
                            <label>
                                <p>PHONE</p>
                                <input
                                    className={styles.input}
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className={styles.label}>
                            <label>
                                <p>BUSINESS TYPE</p>
                                <input
                                    className={styles.input}
                                    type='text'
                                ></input>
                            </label>
                        </div>

                        <div className={styles['textarea-label']}>
                            <label>
                                <p>TELL US MORE ABOUT YOU</p>
                                <textarea className={styles.textarea}/>
                            </label>
                        </div>

                       
                        <button className={styles.btn}>
                                SEND
                        </button>
                        
                    </form>
                    

                </div>
                                
            </div>

            <div className={styles['newsletter-wrapper']}>

                <div className={styles['newsletter-heading']}>
                    <p><strong>NEWSLETTER SIGN UP FORM</strong></p>
                    <a href='#'>MailChimp</a>
                </div>

                <div className={styles['newsletter-signup-wrapper']}>
                    <form className={styles['newsletter-signup-form']}>
                        <h3>Never miss out</h3>
                        <p> Sign up for our Newsletter and get the latest AMAYA news, unique offers and access to exclusive products. </p>

                        <div className={styles['subscribe-wrapper']}>
                            <input 
                                className={styles['subscribe-input']}
                                type='email'
                                placeholder='Enter Email'
                            ></input>
                            <button className={styles.btn}>
                                SIGN UP
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
     );
}
 
export default Contact;