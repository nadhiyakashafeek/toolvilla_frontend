import { useNavigate } from "react-router-dom";
import RenterHeader from "../../users/components/RenterHeader";
import RenterFooter from "../../Renter/Components/RenterFooter"
// import Header from "../components/Header";

function LandingPage() {
  const navigate = useNavigate();
  return (
     <div className="min-h-screen bg-gray-50">
 
     <RenterHeader/>
 
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
 
        {/* Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&auto=format&fit=crop"
          alt="Hardware tools hero"
          className="w-full h-full object-cover"
        />
 
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
 
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Quality Tools, <br /> Built to Last
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-md">
            Discover professional-grade hardware tools for every job — big or small.
          </p>
 
          {/* Button navigates to /products */}
          <button
            onClick={() => navigate("/allproducts")}
            className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-base font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-lg"
          >
            Explore Now
          </button>
        </div>
 
      </div>
 <RenterFooter/>
    </div>
  )
}

export default LandingPage
