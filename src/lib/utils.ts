import carrousel1 from "../../public/carrousel1.png";
import carrousel2 from "../../public/carrousel2.png";
import { CarouselItem } from './definitions';
import phrases from '@/assets/locales/es.json';

export const carrouseldata: CarouselItem[] = [
    { image: carrousel1.src, title: phrases.carrousel[0].title, text: phrases.carrousel[0].description },
    { image: carrousel2.src, title: phrases.carrousel[1].title, text: phrases.carrousel[1].description },
    { image: "https://picsum.photos/seed/random103/500/500", title: phrases.carrousel[2].title, text: phrases.carrousel[2].description }
];