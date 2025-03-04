import Link from "next/link";
import React from "react";

const DonationOptions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 w-full h-1/2"> 
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
        <Link href="/qrpage">Donaciones en Dinero</Link>
      </button>
    </div>
  );
};

export default DonationOptions;