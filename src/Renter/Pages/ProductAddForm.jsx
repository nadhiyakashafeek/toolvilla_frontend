import React from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";

function ProductAddForm() {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add New Tool
        </h2>

        <form className="space-y-4">
          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              placeholder="Enter product name"
              className=" bg-blue-50 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Product Description */}
          <div>
            <label
              htmlFor="productDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              placeholder="Enter product description"
              rows="4"
              className=" bg-blue-50 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="availableDates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select name="category" id="category" className=' bg-blue-50 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value="select"></option>
              <option value="">Hand tool</option>
              <option value="">Power tool</option>
              <option value="">General/Construction tool</option>



            </select>
          </div>
          {/* Available Dates */}
          <div >
            <label
              htmlFor="availableDates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Available Dates
            </label>
            <div className='grid grid-cols-2 gap-1.5'>
               <label
              htmlFor="availableDates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              From
            </label>
              <input
              type="date"
              id="availableDates"
              className=" bg-blue-50 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="availableDates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              To 
            </label>
            <input
              type="date"
              id="availableDates"
              className=" bg-blue-50 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            
            
          </div>

          {/* upload images */}
          <label
              htmlFor="availableDates"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
             Upload Images
            </label>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ProductAddForm
