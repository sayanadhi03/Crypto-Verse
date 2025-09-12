import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const CryptoDetails = ({ params }) => {
  const { coinId } = params;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Crypto Details
          </h1>
          <p className="text-gray-600">Details for cryptocurrency: {coinId}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CryptoDetails;
