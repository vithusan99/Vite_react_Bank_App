import React from 'react'
import styles, { layout} from "../style";
import Button from './Button';
import { features } from '../constants';

const FeaturedCard=({icon,title,content,index})=>(
  <div className={` flex flex-row p-4 ss:p-6 rounded-[20px] ${index !== features.length-1? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[40px] ss:w-[64px] h-[40px] ss:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='h-[50%] w-1/2 object-contain ' />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className=" font-poppins font-semibold text-white text-[16px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[14px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)
function Buisiness() {

  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the buisiness, <br className='sm:block hidden' /> 
          we'll handle the money.
        </h2>
        <p className={`${styles.para} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, 
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10" child={'Get Started'}/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature,index)=>(
            <FeaturedCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Buisiness