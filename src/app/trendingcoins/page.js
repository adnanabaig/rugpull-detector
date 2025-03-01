import React from "react";

const Discover = () => {
  const trendingTokens = [
    "Bitcoin",
    "Ethereum",
    "Solana",
    "Cardano",
    "Polkadot",
    "Dogecoin",
    "Chainlink",
    "Litecoin",
  ];

  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      <h1 className="text-4xl text-black mt-20 ml-10 w-full text-left font-bold mb-4">
        Trending Tokens
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <ul className="space-y-4">
            {trendingTokens.map((token, index) => (
              <li key={index} className="text-black flex items-center bg-gray-100 p-2 rounded-full shadow-md">
                <span className="text-sm text-white bg-black rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </span>

                <span className="ml-4">{token}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Discover;
