import React from 'react'
import { Button, Label, TextInput, Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { loginAPI } from '../services/allAPIs';
import { googleLoginAPI } from '../services/allAPIs';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { registerAPI } from '../Services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

import { jwtDecode } from "jwt-decode";



function Auth({ register }) {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = React.useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async () => {
    console.log(userDetails);
    if (userDetails.username && userDetails.email && userDetails.password) {
      try {
        const response = await registerAPI(userDetails)
        console.log(response);
        if (response.status >=200 && response.status <=300) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate("/login")
          }, 4000)
          setUserDetails({
            username: "",
            email: "",
            password: "",
          })
        }
        else {
          console.log(response);

        }
      }
      catch (err) {
        console.log(err);
        console.log(err.response);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
    else {
      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  const handleLogin = async () => {
    console.log(userDetails);
    if (userDetails.email && userDetails.password) {
      try {
        const response = await loginAPI(userDetails)
        console.log(response);
        if (response.status>= 200 && response.status <= 300) {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem("existingUser", JSON.stringify(response.data.existingUser))
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          if (response.data.existingUser.role == "user") {
            setTimeout(() => {
              navigate("/")
            }, 4000)
            setUserDetails({
              email: "",
              password: "",
            })
          }
          else if (response.data.existingUser.role == "buyer") {
            setTimeout(() => {
              navigate("/buyerhome")
            }, 4000)
            setUserDetails({
              email: "",
              password: ""
            })
          }
          else {
            setTimeout(() => {
              navigate("/")
            }, 4000)
            setUserDetails({
              email: "",
              password: "",
            })
          }
        }
      }
      catch (err) {
        console.log(err);
        console.log(err.response);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
    else {
      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }


    const handleGoogleLogin=async(credential)=>{
    console.log(credential);
    const decoded = jwtDecode(credential.credential);
    console.log(decoded);
    try{
      const response = await googleLoginAPI({
        email:decoded.email,
        password:"googlepswd",
        username:decoded.name,
        profile:decoded.picture,
      });
      console.log(response);
      if (response.status === 200) {
          sessionStorage.setItem("token",response.data.token)
          sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser) )
        }
        else if(response.status === 201){
          sessionStorage.setItem("token",response.data.token)
          sessionStorage.setItem("existingUser",JSON.stringify(response.data.newUser) )
        }
        navigate('/')
    }
    catch(err){
      console.log(err); 
    }
  }


  return (

    <div>
      <section
        className="min-h-screen flex items-center  bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/41/ac/f5/41acf51ede80a9cf280765b872ca8ea6.jpg')",
        }}
      >
        <Card className="h-175p-10 ms-50 bg-white/80 backdrop-blur-md  rounded-xl shadow-2xl w-full max-w-md">
          {/* Logo / Title */}
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Tool Villa
          </h1>

          {
            register ?
              <h1 className="text-2xl font-bold text-center text-black mb-6">
                Register
              </h1>
              :
              <h1 className="text-2xl font-bold text-center text-black mb-6">
                Login
              </h1>
          }

          {/* Form */}
          <form className="space-y-5">
            {
              register &&
              <div>
                <Label htmlFor="username" value="Username" className="mb-1 text-black" />Username<Label />
                <TextInput onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
            }

            <div>
              <Label htmlFor="email" className="mb-1 text-gray-700">
                Email ID
              </Label>
              <TextInput onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="mb-1 text-gray-700">
                Password
              </Label>
              <TextInput onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                *Never share your password with others.
              </p>
            </div>

            {
              register ?
                <Button onClick={handleRegister}
                  className="w-full bg-[#660000] text-black py-2 rounded-md font-semibold hover:bg-[#2f222e] transition-colors"
                >
                  Register
                </Button>
                :
                <>
                <Button onClick={handleLogin}
                  className="w-full bg-[#660000] text-black py-2 rounded-md font-semibold hover:bg-[#2f222e] transition-colors"
                >
                  Login
                </Button>
                
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
                </>
            }
          </form>
          <ToastContainer position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce} />
          {/* Links */}
          {register ?
            <p className="text-sm text-center mt-6">

              <Link to="/login" className="text-black hover:underline">
                Already a user? Login
              </Link>

            </p>
            :
            <div className="flex justify-between items-center text-sm mt-6">
              <Link to="/forgot-password" className="text-black hover:underline">
                Forgot Password?
              </Link>
              <Link to="/register" className="text-black hover:underline">
                New User? Register
              </Link>
            </div>
          }
        </Card>
      </section>
    </div>
  )
}

export default Auth
