import { useState } from 'react';
import styles from './faq.module.css'



const Faq = () => {

    const[clicked, setClicked] = useState(false)

    const toggle = () => {
        if(clicked === false){
            setClicked(true)
        }
        if(clicked === true){
            setClicked(false)
        }

    }
    console.log(clicked)

    return ( 
        <div className={styles['faq-wrapper']}>

            <div className={styles['faq-container']}>

               <div className={styles['title-container']}>
                    <h1 className={styles['faq-title']}>FAQ</h1>
               </div>

               <div className={styles['content-container']}>

                    <div 
                        className={styles['question-container']}
                        onClick={() => toggle()}
                    >
                        

                        <div className={styles.cross}>
                            <div className={styles.horizontal}></div>
                            <div className={clicked ? styles['vertical-active'] : styles['vertical-passive']}></div>
                            
                        </div>

                        <div className={styles.question}>
                            <p><strong>Q: What brew methods do you recommend?</strong></p>
                        </div>

                    </div>
                    
                    <div className={clicked ? styles['answer-active'] : styles['answer-passive']}>
                        <p className={styles.answer}>
                            A: We sit percolator froth turkish, crema wings at carajillo mazagran. Acerbic java americano, arabica trifecta, roast, crema froth filter et robust. Est, turkish french press percolator&nbsp;acerbic. Latte cup, espresso carajillo cinnamon breve frappuccino. Siphon est, so mug cappuccino fair trade sweet.
                        </p>
                    </div>
                    
               </div>
            </div>
            
        </div>
     );
}
 
export default Faq;