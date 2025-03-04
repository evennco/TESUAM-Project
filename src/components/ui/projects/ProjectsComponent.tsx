import React from 'react';
import ProjectsCards from '../common/projectscards';
import { ProjectsComponentProps } from '@/lib/definitions';

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({ images }) => {
  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {images.map((image, index) => (
            <ProjectsCards key={index} image={image.src} title={image.title} text={image.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;