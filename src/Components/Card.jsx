import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className="w-6/7 m-20">
        
        <section id="mentor">
        <h1 className="text-5xl font-bold text-white">MEET OUR<span className="text-cyan-400"> MENTORS</span></h1>
            <div className="mt-10">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="bg-teal-100 h-{350px} text-black rounded-2xl">
                        <div className="h-47 rounded-t-xl bg-gradient-to-tr from-indigo-900 via-indigo-700 to-violet-500 flex justify-center items-center">
                            <img src={d.img} alt="" className="h-32 rounded-full "/>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 p-5">
                            <p className="font-bold text-[20px]">{d.name}</p>
                            <p>{d.review}</p>
                            <button className="bg-indigo-700 text-white text-{10px} px-6 py-1 rounded-xl hover:bg-cyan-500">Read More</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    </div>
  )
}
const data = [
{
    name: 'Stella',
    img:'/mentors/stella.jpg',
    review:'A passionate educator, ready to ignite your learning journey.',
},
{
    name:'Emmy',
    img:'/mentors/emmy.jpg',
    review:'A results-oriented leader, offering valuable guidance.',
},
{
    name:'Raju',
    img:'/mentors/raju.jpg',
    review:'Bringing a wealth of experience and unique perspective.',
},
{
    name:'Priya',
    img:'/mentors/riya.jpg',
    review:'A highly sought-after mentor, offering insights and expertise.',
},
{
    name:'John',
    img:'/mentors/john.jpg',
    review:'A dynamic leader, ready to inspire your learning journey.',
},

]
export default Card