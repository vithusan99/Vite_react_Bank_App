import React from 'react';
import styles,  {layout} from '../style'
import { apple, bill, google } from '../assets';


const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
        <div className="absolute z-[3] left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient "/>
        <div className="absolute z-[0] left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient "/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Effortlessly Manage Your <br className='sm:block hidden' />
          billing and invoicing.
        </h2>
        <p className={`${styles.para} max-w-[470px] mt-5`}>
        Say goodbye to complex billing and invoicing processes. Our user-friendly platform empowers you to effortlessly 
        take control of your financial transactions. Streamline your billing cycle, create professional invoices, 
        and track payments seamlessly. With our intuitive tools, 
        you can focus on what truly matters - growing your business. Experience the convenience of hassle-free billing and invoicing today!
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple-addon" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
          <img src={google} alt="apple-addon" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
        </div>
      </div>
    </section>
  )
}

export default Billing