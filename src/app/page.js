export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="text-center p-6 w-full">
        <h1 className="text-4xl font-bold mb-6 w-full ">
          Which cryptocurrency scams would you like help detecting?
        </h1>
        <div className="mt-12 flex items-center justify-center bg-gray-600 p-4 rounded-full max-w-3xl mx-auto">
          <input
            type="text"
            className="w-full  border-none outline-none text-white placeholder-gray-500"
            placeholder="Enter ticker symbol"
          />
        </div>
      </div>
    </div>
  );
}
