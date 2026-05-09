import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { useState } from "react";
import { HiHome } from "react-icons/hi";

// ─── 1. PRODUCT DATA ───────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "ProDrill X200",
    category: "Power Tools",
    description: "Heavy-duty cordless drill with brushless motor and 20V battery.",
    image: "https://cdn.pixabay.com/photo/2017/04/18/15/42/akkuschrauber-2239493_1280.jpg",
    date: "Mar 15, 2025",
    inStock: true,
    price: "$189.99",
  },
  {
    id: 2,
    name: "SteelGrip Wrench Set",
    category: "Hand Tools",
    description: "12-piece chrome vanadium wrench set with ergonomic handles.",
    image: "https://cdn.pixabay.com/photo/2016/03/27/19/43/tools-1283693_1280.jpg",
    date: "Jan 20, 2025",
    inStock: true,
    price: "$74.50",
  },
  {
    id: 3,
    name: "LaserLevel Pro",
    category: "Measuring",
    description: "Self-leveling 360° laser level with magnetic base and carrying case.",
    image: "https://cdn.pixabay.com/photo/2019/11/27/17/58/level-4657458_1280.jpg",
    date: "Jun 1, 2025",
    inStock: false,
    price: "$220.00",
  },
  {
    id: 4,
    name: 'OrbitalSander 5"',
    category: "Power Tools",
    description: "Random orbital sander with variable speed and dust collection bag.",
    image: "https://cdn.pixabay.com/photo/2015/09/09/20/04/tools-933109_1280.jpg",
    date: "Feb 10, 2025",
    inStock: false,
    price: "$95.00",
  },
  {
    id: 5,
    name: "TorqueMaster Ratchet",
    category: "Hand Tools",
    description: "Digital torque ratchet with LED indicator and 72-tooth mechanism.",
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
    date: "Apr 5, 2025",
    inStock: true,
    price: "$58.99",
  },
  {
    id: 6,
    name: "UltraClamp C-Type",
    category: "Clamping",
    description: "Heavy cast iron C-clamp rated to 1,200 lbs clamping force.",
    image: "https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_1280.jpg",
    date: "May 18, 2025",
    inStock: true,
    price: "$32.00",
  },
];

const categories = ["All", "Power Tools", "Hand Tools", "Measuring", "Clamping"];

// ─── 2. MAIN COMPONENT ────────────────────────────────────────────
function ProductList() {

  // Things that can change on the page
  const [search, setSearch]       = useState("");
  const [category, setCategory]   = useState("All");
  const [stockOnly, setStockOnly] = useState(false);
  const [list, setList]           = useState(products);

  // Delete a product
  function handleDelete(id) {
    setList(list.filter((p) => p.id !== id));
  }

  // Filter products based on search + category + stock toggle
  const filtered = list.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    const matchStock    = stockOnly ? p.inStock : true;
    return matchSearch && matchCategory && matchStock;
  });

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
          {list.length} total · {list.filter((p) => p.inStock).length} in stock
        </p>
      </nav>

      {/* ── FILTER BAR ── */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap gap-4 items-center sticky top-0 z-10 shadow-sm">

        {/* Search box */}
        <input
          type="text"
          placeholder="🔍  Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-200 rounded-full px-4 py-2 text-sm outline-none focus:border-slate-500 w-56 bg-slate-50"
        />

        {/* Category filter buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer
                ${category === cat
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* In-stock toggle */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-slate-500">In stock only</span>
          <div
            onClick={() => setStockOnly(!stockOnly)}
            className={`w-11 h-6 rounded-full cursor-pointer flex items-center px-1 transition-colors
              ${stockOnly ? "bg-emerald-500" : "bg-slate-300"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform
              ${stockOnly ? "translate-x-5" : "translate-x-0"}`}
            />
          </div>
        </div>

      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="px-6 py-8 max-w-6xl mx-auto">

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-4xl mb-3">📦</p>
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">Try changing your search or filters</p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {/* Stock badge */}
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full
                  ${product.inStock
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-600"
                  }`}>
                  {product.inStock ? "✓ In Stock" : "✕ Out of Stock"}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">

                {/* Category */}
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {product.category}
                </span>

                {/* Name + Price */}
                <div className="flex justify-between items-start mt-1 mb-2">
                  <h2 className="text-slate-800 font-bold text-lg leading-tight">
                    {product.name}
                  </h2>
                  <span className="text-slate-800 font-bold ml-2 whitespace-nowrap">
                    {product.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  {product.description}
                </p>

                {/* Date */}
                <p className="text-slate-400 text-xs mb-4">
                  📅 Available: {product.date}
                </p>

                {/* Divider line */}
                <div className="border-t border-slate-100 mb-4" />

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 py-2 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition cursor-pointer">
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-red-500 border border-red-100 bg-red-50 hover:bg-red-100 transition cursor-pointer"
                  >
                    🗑️ Delete
                  </button>
                </div>

              </div>
            </div>

          ))}
        </div>

        {/* Result count */}
        {filtered.length > 0 && (
          <p className="text-center text-slate-400 text-sm mt-10">
            Showing {filtered.length} of {list.length} products
          </p>
        )}

      </div>
    </div>
  );
}

export default ProductList