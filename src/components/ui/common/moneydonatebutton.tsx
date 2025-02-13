import React from "react";

const DonationOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-8 w-full h-full"> 
      {/* Alineación a la izquierda + separación vertical entre botones */}
      <button
        className="
          bg-[#f1d4b3] 
          text-[#a04521]
          font-semibold 
          rounded-md 
          shadow 
          w-full 
          text-5xl 
          hover:bg-[#eecda3] 
          transition-colors
          flex-grow
        "
      >
        Donaciones en Dinero
      </button>

      <button
        className="
          bg-[#f1d4b3] 
          text-[#a04521]
          font-semibold 
          rounded-md 
          shadow 
          w-full 
          text-5xl 
          hover:bg-[#eecda3] 
          transition-colors
          flex-grow
        "
      >
        Donaciones en Especie
      </button>
    </div>
  );
};

export default DonationOptions;