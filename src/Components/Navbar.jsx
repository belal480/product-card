import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // You can add your search functionality here
    // For example, filter products based on searchQuery
  };

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Your logo or brand */}
        <div className="text-white text-2xl font-bold">My Store</div>

        {/* Search input */}
        <div className="flex-none">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute left-3 top-2">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>

        {/* Other navigation links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
