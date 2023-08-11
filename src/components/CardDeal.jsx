import React from 'react'
import Button from './Button'
import styles , {layout} from '../style';
import { card } from '../assets';

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Discover Your Ideal 
          <br className="sm:block hidden" />
           Card : Simplified Steps to Upgrade.
        </h2>
        <p className={`${styles.para} max-w-[470px] mt-5`}>
        Uncover the perfect card that matches your lifestyle effortlessly with our straightforward guide. 
        In just a few simple steps, you'll be navigating through a plethora of options to find the card that
         perfectly aligns with your needs. Say goodbye to confusion and hello to a smarter way of card selection.
         Let's embark on this journey together and find a better card tailored just for you. Your financial upgrade starts here.
        </p>
      <Button styles="mt-10" child={'Get Started'} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>
    </section>
  )
}

export default CardDeal