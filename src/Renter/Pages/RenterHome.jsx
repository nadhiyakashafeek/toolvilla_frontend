import React, { useEffect, useState } from 'react'
import { Card, Carousel } from "flowbite-react";
import { Link } from 'react-router-dom';
import RenterFooter from '../Components/RenterFooter';
import RenterHeader from '../../users/components/RenterHeader';
import { homeProductsAPI } from '../../Services/allAPIs';

function RenterHome() {
  const steps = [
    { icon: "🔧", number: "Step 01", title: "List your tool", desc: "Owners add specs, pricing, and availability to their listing." },
    { icon: "📍", number: "Step 02", title: "Discover nearby", desc: "Engineers browse tools using smart location-based matching." },
    { icon: "📨", number: "Step 03", title: "Send a request", desc: "Pick a rental period and send a request to the owner." },
    { icon: "✅", number: "Step 04", title: "Approve & coordinate", desc: "Owner approves and both parties agree on handover details." },
    { icon: "🔄", number: "Step 05", title: "Use & return", desc: "Engineer uses the tool and returns it after the agreed period." },
  ];

  const categories = [
    { name: "Power tools", count: 42, img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop" },
    { name: "Hand tools", count: 38, img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&auto=format&fit=crop" },
    { name: "Measuring tools", count: 21, img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=400&auto=format&fit=crop" },
    { name: "Safety equipment", count: 17, img: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=400&auto=format&fit=crop" },
    { name: "Clamping tools", count: 14, img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&auto=format&fit=crop" },
    { name: "Cutting tools", count: 29, img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=400&auto=format&fit=crop" },
  ];


  const [token, setToken] = React.useState("");
  const [homeProducts, setHomeProducts] = useState([])

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  // Run when token is ready — fetch products
  useEffect(() => {
    if (token) {
      viewHomeProducts();
    }
  }, [token]);

  const viewHomeProducts = async () => {
    try {
      const reqHeader={
        Authoriztion:`Bearer ${token}`
      }
      const response = await homeProductsAPI();
      console.log(response);
      setHomeProducts(response.data.products); // ✅ save to state
    } catch (err) {
      console.log("error", err); // ✅ no reference to response here
    }
  }


return (
  <div>
    <RenterHeader />
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

    {/* ── NEW ARRIVALS ── */}
    <section className="px-8 py-12 bg-slate-50">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-1">
          Just landed
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">New Arrivals</h2>
        <p className="text-gray-400 text-sm mt-2">Fresh tools added to our collection this week</p>
      </div>

      {homeProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-sm">Loading new arrivals...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {homeProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.imgUrl}
                  alt={item.itemname}
                  className="w-full h-44 object-cover"
                />
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-emerald-600 font-semibold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                  {item.itemname}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">{item.price}</span>

                  <a href={`/viewproduct/${item._id}`}
                    className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full hover:bg-emerald-100 transition"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>

    <section className="py-10 px-4 text-center bg-white ">

      <p className="text-2xl font-semibold tracking-widest text-emerald-600 uppercase mb-2">
        Simple process
      </p>

      <h2 className="text-4xl font-semibold text-gray-900 mb-3">
        How it works
      </h2>

      <p className="text-gray-500 text-2xl max-w-lg mx-auto mb-12 leading-relaxed">
        Connect tool owners with engineers who need equipment — fast, local, and reliable.
      </p>

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">

            <div className="flex flex-col items-center px-6 py-4 w-100">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-xl mb-3">
                {step.icon}
              </div>
              <p className="text-xs font-medium text-emerald-600 mb-1 tracking-wide">{step.number}</p>
              <p className="text-xl font-semibold text-gray-800 mb-1">{step.title}</p>
              <p className="text-xl text-gray-400 leading-relaxed">{step.desc}</p>
            </div>

            {index < steps.length - 1 && (
              <span className="text-gray-300 text-xl mb-6 hidden sm:block">›</span>
            )}

          </div>
        ))}
      </div>

    </section>

    <hr className="w-100 h-1 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10" />
    <section className="px-8 py-12">

      <hr className="border-t border-gray-200 mb-10" />

      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-1">
          Browse by type
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">Categories</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <Card
            key={cat.name}
            className="overflow-hidden p-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-36 object-cover"
            />
            <div className="px-4 py-3 text-center">
              <p className="text-sm font-semibold text-gray-800">{cat.name}</p>
              <p className="text-xs text-gray-400">{cat.count} items</p>
            </div>
          </Card>
        ))}
      </div>

    </section>


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
