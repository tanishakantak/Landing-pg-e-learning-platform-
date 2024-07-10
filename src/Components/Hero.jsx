import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
        <div className='mb-10'>
            <p className='text-yellow-400 text-[13px]'>E-LEARNING PLATFORM</p>
            <p className='text-white text-[40px] font-bold'>UNLOCK YOUR POTENTIAL</p>
            <p className='text-red-500 text-[40px] font-bold'>LEARN FROM THE BEST</p>
            <p className='text-white text-[15px] font-bold'>START YOUR FREE TRIAL</p>
            <div className='mt-4 flex gap-4'>
                <button className='text-black text-[12px] px-3 pb-2 py-2
             bg-blue-300 rounded-full border-[2px] hover:bg-purple-600 border-white'><a href="#mentor">BROWSE</a></button>
                <button className='text-black text-[12px] px-3 pb-2 py-2
             bg-blue-700 rounded-full border-[2px] hover:bg-purple-300 border-white'><a href="#contact">CONTACT US</a></button>
            </div>
        </div>
        <div className='flex justify-center '>
        <div className='h-[360px] w-[560px] p-2 rounded-[20px] bg-gradient-to-b from-[#a30b39]  to-[#2A26B8]'>
            <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1720515982~exp=1720519582~hmac=e4a2b6ae4feb09c2a92025955c4aaf2dda8b8a3f9168ed23acfd0903da89d962&w=740"
            className='h-full w-[560px] object-cover rounded-[20px]'/>
        </div>
        <div className='align-right'>
          <img src="https://ouch-cdn2.icons8.com/EFZAWQNvM1pyURiA9WBU_p3hkc2-qXZ-9dCxqGLfpek/rs:fit:368:318/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjU0/L2M3ZWIwYTNmLTNj/MzYtNDEzYi04MGM3/LTc2MWI1NjZmMzg5/YS5wbmc.png"></img>
        </div>
 
      
        </div>
    </div>
  )
}

export default Hero