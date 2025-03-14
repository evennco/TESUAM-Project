import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface Phrase {
  text: string;
}

export interface CarouselItem {
  image: string;
  title: string;
  text: string;
}

export interface CarouselProps {
  data: CarouselItem[];
  children?: ReactNode;
}

export interface InfiniteCarouselItem {
  src: StaticImageData;
}

export interface StadisticsCardProps {
  value: number;
  text: string;
}

export interface ProjectsCardProps {
  image: StaticImageData;
  title: string;
  text: string;
}

export interface ProjectsComponentProps {
  images: { src: StaticImageData; title: string; text: string }[];
}

export interface BigTitleProps {
  title: string;
  subtitle: string;
}

export interface BigMiniTitleProps {
  title: string;
  subtitle: string;
}

export interface bibleQuotationProps {
  title: string;
  quotation: string;
}

export interface VideocardProps {
  videoUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface DonateButtonProps {
  text: string;
}

export interface MoreButtonProps {
  text: string;
  onClick?: () => void;
  link ?: string
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HashtagBannerProps {
  text: string;
}

export interface LinksProps {
  images: { src: StaticImageData; link?: string }[];
}

export interface StadisticsData {
  value: number;
  text: string;
  modalContent: ReactNode;
}