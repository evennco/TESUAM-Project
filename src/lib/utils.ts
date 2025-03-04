import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import carrousel1 from "../../public/carrousel1.png";
import carrousel2 from "../../public/carrousel2.png";
import carrousel3 from "../../public/main/ninas.jpg";
import { CarouselItem } from './definitions';
import phrases from '@/assets/locales/es.json';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const carrouseldata: CarouselItem[] = [
    { image: carrousel1.src, title: phrases.carrousel[0].title, text: phrases.carrousel[0].description },
    { image: carrousel2.src, title: phrases.carrousel[1].title, text: phrases.carrousel[1].description },
    { image: carrousel3.src, title: phrases.carrousel[2].title, text: phrases.carrousel[2].description }
];