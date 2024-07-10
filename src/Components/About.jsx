import React from 'react'

function About() {
  return (
    
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <section id="about">
      <div className="flex md:space-x-40 space-x-4">
        <div className="mt-10 space-y-4 ">
        <div className='align-right'>
          <img src="https://ouch-cdn2.icons8.com/4qOmKB1ogkA8EjiJUPeDSdwkxZsQ3UaM55Jmcd0vXFA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzMx/LzIxNmExZTc0LWM3/MzMtNDU3Ni1hM2Qz/LTk5MDRlM2RmNTI0/MC5wbmc.png" class="w-[400px] h-[200px] "></img>
          </div>
         
        </div>
        <div className="mt-20">
      
      <div className="w-11/12 md:w-[600px] space-y-5">
        <h1 className="text-5xl font-bold text-white">
          Know <span className="text-yellow-400">About us</span>{" "}
        </h1>
        <p className="text-balance text-white">
          At UPSKILL, we ignite curiosity and empower lifelong learning. Explore a vast course library on any topic, led by passionate experts. Learn at your own pace with flexible schedules and interactive content. Join our thriving community for support, connection, and inspiring discussions. Whether you're a seasoned professional or a curious beginner, we offer the tools and resources to transform your learning journey. Let's unlock your full potential and embark on a journey of endless discovery together!
        </p>
        <button className="px-5 py-2 rounded-md bg-yellow-400">
          Read more
        </button>
      </div>
      </div>
      </div>
      </section>
      
      
    </div>
   
  )
}

export default About