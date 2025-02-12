"use client"; // si lo usas en Next 13 con app router
import React, { useState } from "react";
import Card from "@/components/ui/common/supportcards";
import Modal from "@/components/ui/common/supportmodal";
import BibleQuotations from "../common/quotations";

// Información de cada tarjeta
const CARDS_DATA = [
  {
    title: "¿POR QUÉ DONAR?",
    description: "Conoce el gran impacto que puedes generar con tu aporte.",
    modalContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Más detalles: ¿Por qué donar?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi aperiam dolor ducimus porro aut reiciendis soluta sequi quos, possimus ipsam omnis neque hic non, harum laborum accusantium sint! Corporis?
        </p>
      </>
    ),
  },
  {
    title: "¿CÓMO PUEDO DONAR?",
    description: "Conoce los medios en los que puedes contribuir a nuestra misión.",
    modalContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Formas de donar</h2>
        <p>Puedes donar en efectivo, tarjeta, transferencia, etc.</p>
      </>
    ),
  },
  {
    title: "BENEFICIOS DE DONAR",
    description: "Conoce algunos beneficios que obtienes al convertirte en donante aliado.",
    modalContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Beneficios de donar</h2>
        <ul className="list-disc list-inside">
          <li>Deducciones de impuestos</li>
          <li>Sentido de pertenencia</li>
          <li>... y más beneficios</li>
        </ul>
      </>
    ),
  },
];

const DonationsSection: React.FC = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedCardIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedCardIndex(null);
  };

  return (
    <section className="py-8 flex flex-col items-center">
        <BibleQuotations title = '"Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría"' quotation= "- 2 Corintios 9:7" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS_DATA.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            onOpenModal={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {/* Si se selecciona algún Card, mostramos el modal */}
      {selectedCardIndex !== null && (
        <Modal onClose={handleCloseModal}>
          {CARDS_DATA[selectedCardIndex].modalContent}
        </Modal>
      )}
    </section>
  );
};

export default DonationsSection;