import React from 'react'

function Header({percentageScroll}) {
  // const width = `w-[${percentageScroll}%]`;
  return (
    <div>
      <div className='fixed z-10 w-[100%] mt-0'>
        <p className='text-3xl p-4 bg-slate-300 text-black'>Scroll Indicator</p>
        <p className='bg-green-500 h-5' style={{ width: `${percentageScroll}%` }}></p>  
        {/* <p className={`${width} bg-green-500 h-5`}></p>   */}
        
      </div>
    </div>
  )
}

export default Header