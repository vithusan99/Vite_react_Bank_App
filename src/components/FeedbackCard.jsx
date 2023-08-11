import React from 'react'
import { quotes } from '../assets'

function FeedbackCard({content, name, title, img}) {
  return (
    <div className='flex justify-between flex-col px-6 ss:px-10 py-7 ss:py-12 rounded-[20px] max-w-[300px] sm:max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card '>
      <img src={quotes} alt="quotes" className=' w-[35px] ss:w-[42px] h-[23px] ss:h-[27px] object-contain' />
      <p className=' font-poppins font-normal text-[15px] ss:text-[18px] leading-[32px] text-white my-5 ss:my-10 '>
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className=' w-[48px] h-[48px] rounded-full ' />
        <div className="flex flex-col ml-4">
          <h4 className='font-poppins font-semibold text-[18px] ss:text-[20px] leading-[25px] ss:leading-[32px] text-white'>
            {name}
          </h4>
          <p className=' font-poppins font-normal text-[13px] ss:text-[16px] leading-[20px] ss:leading-[24px] text-dimWhite my-2 ss:my-10 '>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard