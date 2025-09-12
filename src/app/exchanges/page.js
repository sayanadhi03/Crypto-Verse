import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Exchanges = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-4 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Exchanges</h1>
          <p className="text-gray-600">
            List of cryptocurrency exchanges will be displayed here.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exchanges;
