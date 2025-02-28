import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TokenSearch from "./components/TokenSearch";

function App() {
  const [token, setToken] = useState("");

  const handleTokenSearch = (address) => {
    setToken(address);
    console.log("Token Address:", address); // Placeholder for API call
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10">
        <TokenSearch onSearch={handleTokenSearch} />
      </div>
    </div>
  );
}

export default App;
