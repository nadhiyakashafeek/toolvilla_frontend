import React from 'react'
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"
import { IoMdAddCircle } from "react-icons/io";
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarToggle } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';


function RenterHeader() {
  const navigate = useNavigate();

  const [avatarOpen, setAvatarOpen] = useState(false);

  const [token, setToken] = React.useState("")
  const [userDetails, setuserDetails] = React.useState({})

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    setuserDetails(JSON.parse(sessionStorage.getItem("existingUser")))
  }, [token])

  return (
    <Navbar fluid className="text-black" style={{ backgroundColor: "edf5f5" }}>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9 rounded-full"
            alt="House Logo"
          />
          <h1>Tool Villa</h1>
        </div>


        <div className="flex justify-center flex-1">
          <div className="flex space-x-8">
            <Link to="/" className="text-black hover:text-[#660000] font-medium transition-colors">
              🏠 Home
            </Link>
            <Link to="/" className="text-black hover:text-[#660000] font-medium transition-colors">
              💡 How it works
            </Link>
            <Link to={'/allproducts'} className="text-black hover:text-[#660000] font-medium transition-colors">
              ➕ All Products
            </Link>

            <Link to="/contact" className="text-black hover:text-[#660000] font-medium transition-colors">
              📞 Contact
            </Link>
          </div>
        </div>


        <div className="flex md:order-2 items-center space-x-4">
          {/* <div className="flex items-center cursor-pointer">
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow"></div>
            </div>
          </div> */}
          {/* <button
        onClick={toggleTheme}
        className="px-4 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button> */}
          <Link to="/notification" className="text-black hover:text-[#660000] font-medium transition-colors">
            <button className="text-black text-xl">🔔</button>
          </Link>
          {
            token ?
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={
                      userDetails.profile
                        ? userDetails.profile.startsWith("http")
                          ? userDetails.profile
                          : `${serverURL}/uploads/${userDetails.profile}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                    }
                    rounded
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">{userDetails.username}</span>
                  <span className="block truncate text-sm font-medium">{userDetails.email}</span>
                </DropdownHeader>

                <DropdownItem onClick={() => navigate("/addform")}>Add Product</DropdownItem>
                <DropdownItem onClick={() => navigate("/profile")}>Profile</DropdownItem>


                <DropdownDivider />
                <DropdownItem onClick={() => {
                  {/* ✅ was broken */ }
                  sessionStorage.clear(); {/* ✅ clear session on logout */ }
                  navigate("/login");
                }}>Log out</DropdownItem>
              </Dropdown>
              :
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                    rounded
                  />
                }
              >
                <Link to={"/login"}><DropdownItem>Login</DropdownItem></Link>
                <Link to={"/register"}><DropdownItem>Register</DropdownItem></Link>
              </Dropdown>
          }

          <NavbarToggle />
        </div>
      </div>
    </Navbar>
  )
}

export default RenterHeader
