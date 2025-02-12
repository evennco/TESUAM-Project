"use client";
import React, { useState } from "react";
import Card from "@/components/ui/common/supportcards";
import Modal from "@/components/ui/common/supportmodal";
import BibleQuotations from "../common/quotations";
import { CARDS_DATA } from "@/components/ui/common/cardsData";

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
      <BibleQuotations title='"Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría"' quotation="- 2 Corintios 9:7" />
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

      {selectedCardIndex !== null && (
        <Modal onClose={handleCloseModal}>
          {CARDS_DATA[selectedCardIndex].modalContent}
        </Modal>
      )}
    </section>
  );
};

export default DonationsSection;