import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Register API - POST

//Register API - POST(reqBody)
export const registerAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,"")
}


export const loginAPI =async(reqBody) =>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,"")
}


//GoogleLogin API - POST(reqBody)
export const googleLoginAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/googleLogin`,reqBody,"")
}

// Add Tool API - POST(reqBody,token)
// export const addProductAPI = async(reqBody, reqHeader)=>{
//     return await commonAPI('POST',`${serverURL}/api/addProduct`,reqBody,reqHeader)
// }

export const addProductAPI = async(reqBody, reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addProduct`,reqBody,reqHeader)
}
