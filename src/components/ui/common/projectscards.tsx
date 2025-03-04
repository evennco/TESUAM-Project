import Image from "next/image";
import { ProjectsCardProps } from "../../../lib/definitions";
import React from "react";
import MoreButton from '@/components/ui/common/MoreButton';

const ProjectsCards = ({ image, title, text }: ProjectsCardProps) => {
    return (
        <div className="group relative flex flex-col mx-auto w-full max-w-md text-left text-gray-900 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-600 shadow overflow-hidden min-h-[500px] sm:min-h-[600px]">
            <Image
                src={image}
                alt="Project Image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:brightness-50"
            />

            <div className="relative z-10 mt-auto p-6 group-hover:hidden transition-opacity duration-300">
                <div className="flex justify-start space-x-2">
                    <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Label Azul
                    </span>
                    <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Label Verde
                    </span>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-foundationcolorblack dark:text-foundationcolorblack mt-2">{title}</h3>
                <p className="font-light text-foundationcolorblack dark:text-foundationcolorblack">{text}</p>
            </div>

            <div className="absolute inset-0 flex flex-col justify-between bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                <h3 className="text-2xl font-semibold text-foundationcolorblack dark:text-foundationcolorblack">Nuevo Título</h3>
                <p className="text-foundationcolorblack dark:text-foundationcolorblack flex-grow">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dicta recusandae numquam ducimus dolores dolor molestiae voluptas inventore, praesentium, facilis pariatur ut eos sit hic blanditiis? Labore a quos excepturi.
                </p>
            </div>
        </div>
    );
};

export default ProjectsCards;