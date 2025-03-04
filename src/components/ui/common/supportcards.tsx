import React from "react";

interface CardProps {
  title: string;
  description: string;
  onOpenModal: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onOpenModal }) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 bg-white border border-gray-200 rounded-3xl shadow-md">
      <h2 className="font-urbanist text-center mb-4 text-5xl px-10 tracking-tight font-semibold text-foundationcolorred1 dark:text-foundationcolorred1">
        {title}
      </h2>
      <p className="mb-4">{description}</p>
      <button
        onClick={onOpenModal}
        className="bg-foundationcolorred1 text-white px-6 py-3 rounded-full hover:text-foundationcoloryellow2 transition-colors w-2/3"
      >
        Ver más
      </button>
    </div>
  );
};

export default Card;