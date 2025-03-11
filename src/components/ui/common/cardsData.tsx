import phrases from '@/assets/locales/es.json';

export const CARDS_DATA = phrases.support.cards.map((card: any) => ({
  title: card.title,
  description: card.description,
  modalContent: (
    <>
      <h2 className="text-3xl font-extrabold mb-4 text-foundationcolorred1">
        {card.modalContent.title}
      </h2>
      <ul className="text-justify p-4 list-disc list-inside">
        {card.modalContent.content.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}));