import React from 'react'
import { Card, Carousel } from "flowbite-react";
import { Link } from 'react-router-dom';
import RenterFooter from '../Components/RenterFooter';
import RenterHeader from '../Components/RenterHeader';

function RenterHome() {
  return (
    <div>
     <RenterHeader/>
      <div className=" pt-20 relative bg-linear-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
       
        <div className="absolute inset-0">
          
          <img src="https://static.vecteezy.com/system/resources/thumbnails/027/216/917/small_2x/old-tools-on-wooden-background-old-tools-because-they-have-been-used-long-and-hard-banner-background-photo.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to ToolVilla</h1>
          <p className="text-lg text-gray-300 mb-8">Build More, Spend Less </p>
          <a href={"/allproducts"} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
        </div>
      </div>

      <div className='text-center  text-3xl font-bol mt-20'>
        <h1> How this Works </h1>
        <span className='m-5'>
          <p className='text-justify mx-25'>
            Our platform connects tool owners with engineers who need equipment in a simple and efficient way. Tool owners can list their available hardware by adding details such as specifications, pricing, and availability, while engineers can browse and discover tools based on their nearby location. Using smart location-based matching, engineers can find the most convenient options and send rental requests for a specific time period. Once a request is received, the tool owner can review and approve it, after which both parties can coordinate the rental terms, including duration and handover details. The engineer can then use the tool for the agreed period and return it once the work is completed, creating a seamless and reliable rental experience for both sides.
          </p>
        </span>
      </div>

      <hr className="w-100 h-1 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10"/>
      <div className='text-center  text-3xl font-bol mt-20'>
        <span>
          <h1> Categories</h1>
        </span>

      </div>
      <div className='grid grid-cols-3 gap-4 mx-50 '>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />

          <p className='text-center '> item-name </p>
        </Card>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />
          <p className='text-center'> item-name </p>
        </Card>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />
          <p className='text-center'> item-name </p>
        </Card>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />
          <p className='text-center'> item-name </p>
        </Card>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />
          <p className='text-center'> item-name </p>
        </Card>
        <Card className='h-60 w-70 p-5 transition-transform duration-500 hover:scale-110'>
          <img src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" alt="" />
          <p className='text-center'> item-name </p>
        </Card>

      </div>

      
      <div className='text-center  text-3xl font-bol mt-20'>
        <span> <h1>Pro Tips & Tutorials</h1></span>
        <span>
          <p>Hand-picked tutorials and product insights crafted to support every level of DIY and professional work.</p>
        </span>
      </div>
      <div className='grid grid-cols-2 gap-4 m-25 '>
        <Link to="/tipsnaduses">
          <div className="relative w-full h-50 bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500  ">
            {/* Background image */}
            <img
              src="https://media.istockphoto.com/id/872608724/photo/various-reparement-tools-scattered.jpg?s=170667a&w=0&k=20&c=G-ymizwdD7MzMhg3ZlX8fj8mCV2bdQmZo6jHo1ZNCxw=" // replace with your image path
              alt="Power Drill"
              className="absolute inset-0 w-full h-full object-cover opacity-70  "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500">
                Tips And Uses
              </h1>
              <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-xl">
                Expert tips for smarter, safer, everyday tool use
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tipsnaduses">
          <div className="relative w-full h-50 bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500  ">
            {/* Background image */}
            <img
              src="https://i.pinimg.com/1200x/f8/3a/71/f83a71635075f65d90fde032733cf6fb.jpg" // replace with your image path
              alt="Power Drill"
              className="absolute inset-0 w-full h-full object-cover opacity-70  "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500">
                How-t0-tutorials
              </h1>
              <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-xl">
                Step-by-step instructions for <br /> safer, smarter  handling tool
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tipsnaduses">
          <div className="relative w-full h-50 bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500  ">
            {/* Background image */}
            <img
              src="https://i.pinimg.com/control1/1200x/92/26/9f/92269f874b14aa23682d77ca07b67fe7.jpg" // replace with your image path
              alt="Power Drill"
              className="absolute inset-0 w-full h-full object-cover opacity-70  "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500">
                DIY Projects
              </h1>
              <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-xl">
                Creative builds,woodworking  <br /> ideas ,jigsaw hacks & more..
              </p>
            </div>
          </div>
        </Link>
        <Link to="/tipsnaduses">
          <div className="relative w-full h-50 bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500  ">
            {/* Background image */}
            <img
              src="https://img.freepik.com/premium-photo/customer-shopping-tools-wellstocked-hardware-store-aisle-examining-products_964444-19549.jpg" // replace with your image path
              alt="Power Drill"
              className="absolute inset-0 w-full h-full object-cover opacity-70  "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:scale-105 shadow-gray-500">
                What-to-buy
              </h1>
              <p className="mt-2 text-lg md:text-xl text-gray-200 max-w-xl">
                Expert tips for smarter, safer, everyday tool use
              </p>
            </div>
          </div>
        </Link>


      </div>

      
      <RenterFooter />
    </div>
  )
}

export default RenterHome
