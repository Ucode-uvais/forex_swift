import React from "react";
import ConverterForm from "./components/ConverterForm";

const App = () => {
  return (
    <div className="mx-auto p-6 max-w-md bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 border border-opacity-30 border-white rounded-lg shadow-lg">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">
        ForexSwift
      </h2>
      <h3 className="text-white text-lg md:text-xl font-light text-center italic mb-8">
        All-in-one business banking & payments platform
      </h3>
      <ConverterForm />
    </div>
  );
};

export default App;
