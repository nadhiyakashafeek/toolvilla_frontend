import React from 'react'
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"

const navLinks = [
  { label: "Home" },
  { label: "Services", submenu: ["Web Design", "App Development", "SEO"] },
  { label: "Pages",    submenu: ["About Us", "Blog", "FAQ"] },
  { label: "Contact" },
];

function NavItem({ label, submenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}   // open on hover
      onMouseLeave={() => setOpen(false)}  // close when mouse leaves
    >
      <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 font-medium text-sm">
        {label}
        {submenu && <span className="text-[10px]">{open ? "▲" : "▼"}</span>}
      </button>

      {/* Submenu — only shows if this link has one AND open is true */}
      {submenu && open && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-10">
          {submenu.map((item) => (
            <a key={item} href="#"
              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-xl last:rounded-b-xl">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
function RenterHeader() {
  const [avatarOpen, setAvatarOpen] = useState(false);

  
  return (
    <div>
      <nav className="  top-0 left-0 right-0 z-50 bg-transparent px-6 py-3 flex items-center justify-between">
      <div className="absolute inset-0"></div>
      {/* LEFT: Logo + brand name */}
      <div className="flex items-center gap-2">
        <img src={logo}  className='w-15'/>
        <span className="font-bold text-amber-600 text-2xl">Tool Villa</span>
      </div>

      {/* MIDDLE: Links */}
      <div className="flex items-center gap-7 ">
        {navLinks.map((link) => (
          <NavItem key={link.label} label={link.label} submenu={link.submenu} />
        ))}
      </div>

      {/* RIGHT: Avatar + dropdown */}
      <div className="relative">
        <button onClick={() => setAvatarOpen(!avatarOpen)} className="flex items-center gap-2">
          <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-blue-200" />
          <div>
            <p className="text-sm font-semibold text-gray-700">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <span className="text-xs text-gray-400">{avatarOpen ? "▲" : "▼"}</span>
        </button>

        {avatarOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-20">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-700">John Doe</p>
              <p className="text-xs text-gray-400">john@example.com</p>
            </div>
            <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50">👤 My Profile</a>
            <a href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50">⚙️ Settings</a>
            <a href="#" className="block px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 border-t">🚪 Log out</a>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default RenterHeader
