import React from 'react'
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"
import { IoMdAddCircle } from "react-icons/io";

function BuyerHeader() {
  return (
    <div>
       <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm">
 
      {/* Logo + Company Name */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
        <span className="text-xl font-semibold text-gray-900">ToolVilla</span>
      </div>
 
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Hello, Buyer</span>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm cursor-pointer hover:ring-2 hover:ring-emerald-400 transition-all">
          B
        </div>
      </div>
 
    </header>
    </div>
  )
}

export default BuyerHeader
