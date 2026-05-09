import React, { useState } from 'react'
// import RenterHeader from '../Components/RenterHeader'

function ViewProduct() {
  const [selectedImg, setSelectedImg] = useState(0)
  const [qty, setQty] = useState(1)

  const images = [
    "https://toolswarehouse.in/cdn/shop/files/81dNVvSMcfL._SX569.jpg?v=1754033271&width=711",
    "https://toolswarehouse.in/cdn/shop/files/81dNVvSMcfL._SX569.jpg?v=1754033271&width=711",
    "https://toolswarehouse.in/cdn/shop/files/81dNVvSMcfL._SX569.jpg?v=1754033271&width=711",
  ]

  const specs = [
    { label: "Material", value: "Chrome Vanadium Steel" },
    { label: "Handle", value: "Anti-slip rubber grip" },
    { label: "Length", value: "150 mm" },
    { label: "Weight", value: "120 g" },
    { label: "Type", value: "Flathead / Phillips" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* <RenterHeader /> */}

      {/* ── Breadcrumb ── */}
      
      {/* <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <span className="hover:text-gray-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-gray-600 cursor-pointer">Tools</span>
          <span>/</span>
          <span className="text-gray-700 font-medium">Screw Driver</span>
        </nav>
      </div> */}


    <div className='max-w-6xl mx-auto px-6 pt-6'>
        <nav className='flex items-center gap-2 text-sm text-gray-400'>
            <span className='hover:text-gray-600 cursor-pointer'>Home</span>
            <span>/</span>
            <span className='hover:text-gray-600 cursor-pointer'>Tools</span>
            <span>/</span>
            <span className='hover:text-gray-600 cursor-pointer'>Viewproduct</span>
            <span></span>

        </nav>

    </div>
      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── Left: Image Panel ── */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-6 aspect-square shadow-sm">
            <img
              src={images[selectedImg]}
              alt="Product"
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`w-20 h-20 rounded-xl border-2 overflow-hidden shrink-0 transition-all duration-200
                  ${selectedImg === i
                    ? 'border-green-500 shadow-md shadow-green-100'
                    : 'border-gray-200 hover:border-gray-300'}`}
              >
                <img src={img} alt="" className="w-full h-full object-contain p-1" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: Product Details ── */}
        <div className="flex flex-col gap-0">

          {/* Brand + badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full tracking-wide uppercase">
              Stanley
            </span>
            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full tracking-wide uppercase">
              In Stock
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Professional Screw Driver Set
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(4)}{'☆'.repeat(1)}
            </div>
            <span className="text-sm text-gray-500">4.0 <span className="text-gray-300">|</span> 128 reviews</span>
          </div>

          {/* ── Divider ── */}
          <div className="my-5 border-t border-gray-100" />

          {/* Price block */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">₹349</span>
            <span className="text-lg text-gray-400 line-through">₹499</span>
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">30% off</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes. Free delivery above ₹499.</p>

          {/* ── Divider ── */}
          <div className="my-5 border-t border-dashed border-gray-200" />

          {/* Quantity + CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-medium transition-colors"
              >−</button>
              <span className="px-5 py-2 text-sm font-semibold text-gray-800 border-x border-gray-200">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-lg font-medium transition-colors"
              >+</button>
            </div>
            <button className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md shadow-green-200">
              Rent Now
            </button>
            <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-red-200 hover:text-red-500 transition-all duration-200">
              ♡
            </button>
          </div>

          {/* ── Divider with label ── */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-100" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Specifications</span>
            <div className="flex-1 border-t border-gray-100" />
          </div>

          {/* Specs table — divide-y pattern */}
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
            {specs.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-400 font-medium">{label}</span>
                <span className="text-sm text-gray-800 font-semibold">{value}</span>
              </div>
            ))}
          </div>

          {/* ── Divider with label ── */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-100" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Description</span>
            <div className="flex-1 border-t border-gray-100" />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            A precision-engineered screwdriver built for professionals and enthusiasts alike. The ergonomic anti-slip handle provides maximum torque with minimal effort. Chrome vanadium steel tips resist wear and deliver a tight fit on every fastener type.
          </p>

          {/* ── Bottom accent divider ── */}
          <div className="mt-8 h-1 w-16 bg-green-500 rounded-full" />
        </div>
      </div>

      {/* ── Full-bleed section break ── */}
      <div className="h-2 bg-gray-100 border-y border-gray-200 my-6" />

      {/* ── Related products strip ── */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-lg font-bold text-gray-800 mb-4">You may also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Hammer", "Wrench Set", "Drill Bit", "Pliers"].map(name => (
            <div key={name} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="bg-gray-50 rounded-lg h-28 flex items-center justify-center text-3xl mb-3">🔧</div>
              <p className="text-sm font-semibold text-gray-800">{name}</p>
              <p className="text-xs text-green-600 font-medium mt-1">From ₹199/day</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewProduct