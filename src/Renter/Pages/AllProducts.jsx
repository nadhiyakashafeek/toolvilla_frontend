import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { viewProductsAPI } from "../../Services/allAPIs";
import { Link } from "react-router-dom";
import { Radio, Label } from "flowbite-react";
import { searchContext } from "../../Context/SearchContextShare";


function AllProducts() {
  const [token, setToken] = useState("");
  const [allproducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {searchKey,setSearchKey}=useContext(searchContext)
  console.log(searchKey);
  

  // Set token once on mount
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  // Fetch products when token is ready
  useEffect(() => {
    if (token) {
      viewAllProducts();


    }
  }, [token]);

  const viewAllProducts = async (searchKey) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      console.log("inside view products")
      const response = await viewProductsAPI(searchKey,reqHeader);
      console.log(response);
      setAllProducts(response.data.products);
      setFilteredProducts(response.data.products); // Initialize filtered products
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleFilter = (fltr) => {
    console.log("inside filter function");
    if (fltr === "All") {
      setFilteredProducts(allproducts);  // ✅
    } else {
      const filtered = allproducts.filter(  // ✅ allproducts, NOT filteredProducts
        (product) => product.category.toLowerCase().trim() === fltr.toLowerCase().trim()
      );
      console.log(filtered);
      setFilteredProducts(filtered);
    }
  };

  const handleSearch =(searchKey)=>{
    console.log(searchKey)
  }
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HEADER ── */}
      <nav className="bg-linear-to-r from-slate-200 to-slate-400 px-6 py-8">
        <Breadcrumb aria-label="Default breadcrumb example">
          <BreadcrumbItem href="#" icon={HiHome}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem>Flowbite React</BreadcrumbItem>
        </Breadcrumb>
        <p className="text-slate-800 text-sm mt-1">
          {allproducts.length} total
        </p>
      </nav>

{/* search  */}

 <div className="w-full bg-white border-b border-slate-100 px-6 py-4">
  <div className="max-w-7xl mx-auto">
    <div className="relative flex items-center gap-2">
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </span>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder="Search by name or SKU..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
        />
      </div>
      <Button color="cyan">Search</Button>
    </div>
  </div>
</div>
      {/* sidebar */}
      <div className="flex gap-6">
        <div className='flex '>
          <div className='p-10'>
            <div className="flex max-w-md flex-col gap-4">
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("All")} id="All" name="countries" value="All" />
                <Label htmlFor="Philosophy">All Category</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Power Tools")} id="power-tools" name="countries" value="Power Tools" />
                <Label htmlFor="power-tools">Power Tools</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Hand Tools")} id="hand-tools" name="countries" value="Hand Tools" />
                <Label htmlFor="hand-tools">Hand Tools</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Measuring")} id="measuring-tools" name="countries" value="Measuring" />
                <Label htmlFor="measuring-tools">Measuring Tools</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Safety Equipment")} id="safety-equipment" name="countries" value="Safety Equipment" />
                <Label htmlFor="safety-equipment">Safety Equipment</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Clamping Tools")} id="clamping-tools" name="countries" value="Clamping" />
                <Label htmlFor="clamping-tools">Clamping Tools</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Cutting Tools")} id="cutting-tools" name="countries" value="Cutting Tools" />
                <Label htmlFor="cutting-tools">Cutting Tools</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio onClick={() => handleFilter("Furniture/Office")} id="furniture-office" name="countries" value="Furniture/Office" />
                <Label htmlFor="furniture-office">Furniture/Office </Label>
              </div>
            </div>
          </div>
        </div>
        {/* ── PRODUCT GRID ── */}
        <div className="px-6 py-8 max-w-6xl mx-auto">


          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-3">📦</p>
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm mt-1">Try changing your search or filters</p>
            </div>
          )}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((items) => (
              <Link to={`/viewproduct/${items._id}`}>
                <div
                  key={items.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={items.imgUrl}
                      alt={items.itemname}
                      className="w-full h-48 object-cover"
                    />
                    <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full
                  ${items.stock > 0
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-600"
                      }`}>
                      {items.stock > 0 ? "✓ In Stock" : "✕ Out of Stock"}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      {items.category}
                    </span>

                    <div className="flex justify-between items-start mt-1 mb-2">
                      <h2 className="text-slate-800 font-bold text-lg leading-tight">
                        {items.itemname}
                      </h2>
                      <span className="text-slate-800 font-bold ml-2 whitespace-nowrap">
                        {items.price}
                      </span>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {items.description}
                    </p>

                    <p className="text-slate-400 text-xs mb-4">
                      📅 Available: {items.toDate}
                    </p>

                    <div className="border-t border-slate-100 mb-4" />

                    <div className="flex gap-3">
                      <button className="flex-1 py-2 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
                        ✏️ Edit
                      </button>
                      <button className="flex-1 py-2 rounded-lg text-sm font-medium text-red-500 border border-red-100 bg-red-50 hover:bg-red-100 transition cursor-pointer">
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>

          {allproducts.length > 0 && (
            <p className="text-center text-slate-400 text-sm mt-10">
              Showing {allproducts.length} products
            </p>
          )}

        </div>
      </div>
    </div>

  )
}

export default AllProducts