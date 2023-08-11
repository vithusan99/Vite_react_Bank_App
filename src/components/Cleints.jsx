import React from 'react'
import style from '../style'
import { clients } from '../constants'

function Cleints() {
  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} gap-5 flex-wrap w-full`}>
        {
          clients.map((cleint)=>(
            <div key={cleint.id} className={`flex-1 ${style.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
              <img src={cleint.logo} alt="cleint" className='sm:min-w-[192px] min-w-[100px] object-contain' />
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Cleints