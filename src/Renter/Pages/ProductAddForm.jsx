import React from "react";
import { addProductAPI } from "../../Services/allAPIs";
import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
  FileInput,
} from "flowbite-react";

function ProductAddForm() {
  const [preview, setPreview] = React.useState("")
  const [previewList, setPreviewList] = React.useState([])
  const [productDetails, setProductDetails] = React.useState({
    itemname: "",
    description: "",
    sku: "", brand: "",
    category: "",
    price: "",
    stock: "",
    dimensions: "",
    weight: "",
    email: "",
    imgUrl:"",
    fromDate: "",
    toDate: "",
    images: []
  })

  const handleAddProduct = async (e) => {
    e.preventDefault();
    console.log(productDetails);

    const { itemname, description, sku, brand, category, price, stock, dimensions, weight, email, images, fromDate, toDate,imgUrl } = productDetails

    // Basic validation
    if (itemname && description && sku && brand && category && price && stock && dimensions && weight && fromDate && toDate) {
      try {
        // Get token from sessionStorage
        let token = sessionStorage.getItem("token");
        console.log("Token:", token);
        // if (!token) {
        //   alert("Unauthorized! Please login again.");
        //   return;
        // }

        // Request headers
        const reqHeader = {
          Authorization: `Bearer ${token}`
        }

        // Build FormData body
        const reqBody = new FormData();


        for (let key in productDetails) {
          if (key !== "images") {
            reqBody.append(key, productDetails[key]);
          } else {
            productDetails.images.forEach((item) => (
              reqBody.append("images", item)
            ))
          }
        }

        // API call (outside the loop)
        console.log(reqBody);
        console.log(reqHeader);


        const response = await addProductAPI(reqBody, reqHeader);
        console.log("Response status:", response.status); // ← add this
        console.log("Response data:", response.data);     // ← add this

        if (response.status === 200) {
          alert("Product added successfully!");
          setProductDetails({
            itemname: "", description: "", sku: "", brand: "", imgUrl:"",
            category: "", price: "", stock: "", dimensions: "",
            weight: "", email: "", fromDate: "", toDate: "", images: []
          })
          setPreviewList([]);
        }
      } catch (error) {
        console.log("Error status:", error.response?.status);  // ← add this
        console.log("Error data:", error.response?.data);      // ← add this
        alert("Error: " + error.response?.data?.message);
      }

    }

    else {
      alert("Please fill in all the fields.");
    }
  };

 const resetForm = async()=>{
      setProductDetails({
            itemname: "", description: "", sku: "", brand: "",imgUrl:"",
            category: "", price: "", stock: "", dimensions: "",
            weight: "", email: "", fromDate: "", toDate: "", images: []
          })
          setPreviewList([]);
    }


  const handleUpload = async (e) => {
    console.log(e.target.files[0])

    let imgArray = productDetails.images
    if (imgArray.length < 3) {
      imgArray.push(e.target.files[0])
    }

    console.log(imgArray);
    let imgUrl = URL.createObjectURL(e.target.files[0])
    console.log(imgUrl);
    setPreview(imgUrl)

    let imgListArray = previewList
    if (imgListArray.length < 3) {
      imgListArray.push(imgUrl)
    }
    setPreviewList(imgListArray)

    console.log(previewList);

   

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add New Tool
        </h2>

        <form className="space-y-5">

          {/* Product Name */}
          <div className="flex-row gap-3 mb-2">
            <Label htmlFor="productName" value="Product Name" />
            <TextInput value={productDetails.itemname} className="mb-2" onChange={(e) => setProductDetails({ ...productDetails, itemname: e.target.value })}
              id="productName"
              placeholder="e.g. Electric Drill"
              required
            />

          </div>
          <div>
            <Label value=" " />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="sku" value="SKU" />
                <TextInput value={productDetails.sku} type="text" id="sku" required placeholder="SKU" onChange={(e) => setProductDetails({ ...productDetails, sku: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="brand" value="Brand" />
                <TextInput value={productDetails.brand} type="text" id="brand" required placeholder="Brand" onChange={(e) => setProductDetails({ ...productDetails, brand: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" value="Product Description" />
            <Textarea value={productDetails.description} onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
              id="description"
              placeholder="Write a short description..."
              rows={4}
              required
            />
          </div>
          <div className="flex-row gap-3 mb-2">
            <Label htmlFor="imgUrl" value="imgUrl" />
            <TextInput value={productDetails.imgUrl} className="mb-2" onChange={(e) => setProductDetails({ ...productDetails, imgUrl: e.target.value })}
              id="imgUrl"
              placeholder="Image Url"
              required
            />

          </div>
          <div>
            <Label value=" " />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="dimensions" value="dimensions" />
                <TextInput value={productDetails.dimensions} type="text" id="dimensions" required placeholder="dimensions" onChange={(e) => setProductDetails({ ...productDetails, dimensions: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="price" value="price" />
                <TextInput value={productDetails.price} type="text" id="price" required placeholder="rent per day" onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} />
              </div>
            </div>
          </div>
          <div>
            <Label value=" " />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="stock" value="stock" />
                <TextInput value={productDetails.stock} type="text" id="stock" required placeholder="stock" onChange={(e) => setProductDetails({ ...productDetails, stock: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="weight" value="weight" />
                <TextInput value={productDetails.weight} type="text" id="weight" required placeholder="weight" onChange={(e) => setProductDetails({ ...productDetails, weight: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category" value="Category" />
            <Select value={productDetails.category} id="category" required onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}>
              <option value="">Select category</option>
              <option value="hand">Hand Tool</option>
              <option value="power">Power Tool</option>
              <option value="construction">Construction Tool</option>
            </Select>
          </div>

          {/* Dates */}
          <div>
            <Label value="Available Dates" />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="fromDate" value="From" />
                <TextInput value={productDetails.fromDate} type="date" id="fromDate" required onChange={(e) => setProductDetails({ ...productDetails, fromDate: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="toDate" value="To" />
                <TextInput value={productDetails.toDate} type="date" id="toDate" required onChange={(e) => setProductDetails({ ...productDetails, toDate: e.target.value })} />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <Label htmlFor="images" value="Upload Images" />

            {/* 3 ഇമേജിൽ കുറവാണെങ്കിൽ മാത്രം ഇൻപുട്ട് ബോക്സ് കാണിക്കുക */}
            {previewList.length < 3 ? (
              <FileInput id="images" multiple onChange={(e) => handleUpload(e)} />
            ) : (
              <p className="text-sm text-green-600 font-medium py-2">
                {/* maximum 3 images uploaded. */}
              </p>
            )}

            {/* slider section*/}
            {previewList && previewList.length > 0 && (
              <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory">
                {previewList.map((url, index) => (
                  <div key={index} className="flex-shrink-0 w-full max-w-[300px] h-[180px] snap-center rounded-lg overflow-hidden shadow-md border border-gray-200">
                    <img
                      src={url}
                      alt={`preview-${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <Label value=" " />
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Button onClick={handleAddProduct}
                  type="submit"
                  className="w-full text-lg font-semibold"
                >
                  Add Product
                </Button>
              </div>
              <div>
                <Button onClick={resetForm}
                  type="submit"
                  className="w-full text-lg font-semibold"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Submit */}

        </form>
      </div>
    </div>
  );
}

export default ProductAddForm;