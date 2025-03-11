"use client"
import React from 'react';
import ProjectsCards from '../common/projectscards';
import { ProjectsComponentProps } from '@/lib/definitions';
import phrases from '@/assets/locales/es.json';

const ProjectsComponent: React.FC<ProjectsComponentProps & { offset?: number }> = ({ images, offset = 0 }) => {
  const cardsTexts = phrases.projects.cards.slice(offset, offset + images.length);
  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {images.map((image, index) => {
              const card = cardsTexts[index];
              return (
                <ProjectsCards
                  key={index}
                  image={image.src}
                  title={card?.title || ''}
                  text={card?.text || ''}
                  labels={card?.labels}
                  hoverTitle={card?.hover?.title}
                  hoverText={card?.hover?.text}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;