import React, { useState } from "react";

const TokenSearch = ({ onSearch }) => {
  const [tokenAddress, setTokenAddress] = useState("");

  const handleSearch = () => {
    if (tokenAddress.trim() !== "") {
      onSearch(tokenAddress);
    }
  };

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        className="p-2 border rounded w-80"
        placeholder="Enter Token Contract Address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
      />
      <button
        className="ml-2 p-2 bg-blue-600 text-white rounded"
        onClick={handleSearch}
      >
        Analyze Token
      </button>
    </div>
  );
};

export default TokenSearch;
