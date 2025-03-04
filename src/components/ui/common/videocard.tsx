import React from 'react';
import { VideocardProps } from "../../../lib/definitions";

const VideoCard = ({ videoUrl, title, description, buttonText }:VideocardProps) => {
  return (
    <div className="bg-foundationcolorwhite dark:foundationcolorwhite p-4 rounded-lg shadow-md rounded-4xl">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full min-h-[400px] object-cover rounded-lg"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-4xl font-bold font-urbanist mt-4 text-foundationcolorblack">{title}</h2>
      <p className="text-base font-montserrat mt-2 text-foundationcolorblack">{description}</p>
      <button className="mt-4 bg-foundationcolorred1 text-white py-2 px-8 rounded-2xl hover:bg-foundationcoloryellow2">
        {buttonText}
      </button>
    </div>
  );
}

export default VideoCard;