import Image from "next/image";
import { ProjectsCardProps } from "../../../lib/definitions";
import React from "react";

const ProjectsCards = ({ image, title, text }: ProjectsCardProps) => {
    return (
        <div className="relative flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white overflow-hidden min-h-[500px] sm:min-h-[600px]">
            <Image
                src={image}
                alt="Project Image"
                fill
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 mt-auto p-6">
                <h3 className="mb-2 text-2xl font-semibold text-foundationcolorblack">{title}</h3>
                <p className="font-light text-foundationcolorblack">{text}</p>
            </div>
        </div>
    );
}
export default ProjectsCards;