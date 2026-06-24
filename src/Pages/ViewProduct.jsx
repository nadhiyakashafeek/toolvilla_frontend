import React, { useState, useEffect } from 'react'
import { getaProductAPI } from '../Services/allAPIs'
import { useParams } from 'react-router-dom'

function ViewProduct() {
  const { id } = useParams()
  const [selectedImg, setSelectedImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [token, setToken] = useState("")
  const [viewaProduct, setviewaProduct] = useState({})

  // Get token on mount
  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])

  // Fetch product when token is ready
  useEffect(() => {
    if (token) {
      getaProduct()
    }
  }, [token])

  const getaProduct = async () => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
      const response = await getaProductAPI(id, reqHeader)
      console.log(response)
      setviewaProduct(response.data.singleproduct)
    } catch (err) {
      console.log("error", err)
    }
  }

  // Use images from API, fallback to empty array
  const images = viewaProduct?.images?.length > 0 ? viewaProduct.images : []

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <span className="hover:text-gray-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-gray-600 cursor-pointer">Tools</span>
          <span>/</span>
          <span className="text-gray-700 font-medium">{viewaProduct?.itemname || "View Product"}</span>
        </nav>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── Left: Image Panel ── */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-6 aspect-square shadow-sm">
            {images.length > 0 ? (
              <img
                src={images[selectedImg]}
                alt={viewaProduct?.itemname}
                className="w-full h-full object-contain transition-all duration-300"
              />
            ) : (
              <span className="text-gray-300 text-6xl">🔧</span>
            )}
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

          {/* Brand + stock badge */}
          <div className="flex items-center gap-2 mb-3">
            {viewaProduct?.brand && (
              <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full tracking-wide uppercase">
                {viewaProduct.brand}
              </span>
            )}
            <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase
              ${viewaProduct?.stock > 0
                ? 'bg-blue-100 text-blue-700'
                : 'bg-red-100 text-red-600'}`}>
              {viewaProduct?.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {viewaProduct?.itemname || "Loading..."}
          </h1>

          <div className="my-5 border-t border-gray-100" />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">
              {viewaProduct?.price ? `₹${viewaProduct.price}` : "—"}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes. Free delivery above ₹499.</p>

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

          {/* Specs divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-100" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Specifications</span>
            <div className="flex-1 border-t border-gray-100" />
          </div>

          {/* Specs from API */}
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 overflow-hidden">
            {[
              { label: "Category",   value: viewaProduct?.category },
              { label: "SKU",        value: viewaProduct?.sku },
              { label: "Weight",     value: viewaProduct?.weight },
              { label: "Dimensions", value: viewaProduct?.dimensions },
              { label: "Stock",      value: viewaProduct?.stock },
            ].filter(s => s.value).map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-400 font-medium">{label}</span>
                <span className="text-sm text-gray-800 font-semibold">{value}</span>
              </div>
            ))}
          </div>

          {/* Description divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-gray-100" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Description</span>
            <div className="flex-1 border-t border-gray-100" />
          </div>

          {/* Description from API */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {viewaProduct?.description || "No description available."}
          </p>

          <div className="mt-8 h-1 w-16 bg-green-500 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default ViewProduct