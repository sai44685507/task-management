// import React, { useState } from "react";
// import "../styles/Navbar.css";

// // Define the props interface to include className, onSearch, and onFilter
// interface NavbarProps {
//   className?: string; // Optional className for styling
//   onSearch: (query: string) => void;
//   onFilter: (status: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ className, onSearch, onFilter }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilterStatus(e.target.value);
//     onFilter(e.target.value);
//   };

//   return (
//     <nav className={`navbar ${className}`}> {/* Apply className here */}
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search Project"
//         />
//       </div>

//       {/* Filter Dropdown */}
//       <div className="filter-dropdown">
//         <select value={filterStatus} onChange={handleFilterChange}>
//           <option value="">Filter</option>
//           <option value="To Do">To Do</option>
//           <option value="On Progress">On Progress</option>
//           <option value="Done">Done</option>
//         </select>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "../styles/Navbar.css";

// Importing the images
import searchIcon from "../assets/search.png"; // Assuming search-icon.png is in the assets folder
import filterIcon from "../assets/filter.jpg"; // Assuming filter-icon.jpg is in the assets folder

// Define the props interface to include className, onSearch, and onFilter
interface NavbarProps {
  className?: string; // Optional className for styling
  onSearch: (query: string) => void;
  onFilter: (status: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ className, onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <nav className={`navbar ${className}`}> {/* Apply className here */}
      {/* Search Bar */}
      <div className="search-bar">
        <img src={searchIcon} alt="Search Icon" className="search-icon" /> {/* Using imported search icon */}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Project"
        />
      </div>

      {/* Filter Dropdown */}
      <div className="filter-dropdown">
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="">
            <img src={filterIcon} alt="Filter Icon" className="filter-icon" /> {/* Icon before the text */}
            Filter
          </option>
          <option value="To Do">To Do</option>
          <option value="On Progress">On Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
