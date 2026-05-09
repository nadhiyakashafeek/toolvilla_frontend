import React from "react";
import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
  FileInput,
} from "flowbite-react";

function ProductAddForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add New Tool
        </h2>

        <form className="space-y-5">

          {/* Product Name */}
          <div>
            <Label htmlFor="productName" value="Product Name" />
            <TextInput
              id="productName"
              placeholder="e.g. Electric Drill"
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description" value="Product Description" />
            <Textarea
              id="description"
              placeholder="Write a short description..."
              rows={4}
              required
            />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category" value="Category" />
            <Select id="category" required>
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
                <TextInput type="date" id="fromDate" required />
              </div>
              <div>
                <Label htmlFor="toDate" value="To" />
                <TextInput type="date" id="toDate" required />
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <Label htmlFor="images" value="Upload Images" />
            <FileInput id="images" multiple />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full text-lg font-semibold"
          >
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductAddForm;