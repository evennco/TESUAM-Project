import { StadisticsData } from '@/lib/definitions';
import phrases from '@/assets/locales/es.json';

export const STADISTICS_DATA: StadisticsData[] = phrases.homepage.stadistics.data.map((item: any) => ({
  value: item.value,
  text: item.text,
  modalContent: (
    <>
      <h2 className="text-3xl font-extrabold mb-4 text-foundationcolorred1">{item.modalContent.title}</h2>
      <ol className="text-justify p-4">
        {item.modalContent.content.map((content: string, index: number) => (
          <li key={index}>- {content}</li>
        ))}
      </ol>
    </>
  )
}));