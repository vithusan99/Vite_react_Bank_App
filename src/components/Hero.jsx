import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-8 ss:mb-2 ">
          <img src={discount} alt="discount" className=' w-[32px] h-[32px] ' />
          <p className={`${styles.para} ml-2`}>
          <span className="text-white">20% </span>
            Discount For {" "}
          <span className="text-white">1 month </span>
          Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100px] leading-[50px]">
            The Next <br className='sm:block hidden' />{" "}
            <span className=' text-gradient  '>
              Generation
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100px] leading-[50px]">
        Payment Method
        </h1>
        <p className={`mt-5 ${styles.para} max-w-[470px]`}>
        Our team of experts uses a methodalogy to identify the credit cards most 
        likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] md:h-[75vh] xl:h-[100%] relative z-[5] ' />
        <div className="absolute z-0 w-2/5 h-[35%] top-0 overflow-hidden pink__gradient " />
        <div className="absolute z-1 w-4/5 h-4/5 rounded-full overflow-hidden bottom-40 white__gradient " />
        <div className="absolute z-0 w-1/2 h-1/2 right-20 overflow-hidden bottom-20 blue__gradient " />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}><GetStarted/></div>
    </section>
  )
}

export default Hero