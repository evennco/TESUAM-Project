"use client"
import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="bg-white dark:bg-foundationcolorwhite p-6 rounded-lg">
            <form className="space-y-6 text-left">
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Asunto</label>
                    <input type="text" id="subject" className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Nombre</label>
                    <input type="text" id="name" className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Correo</label>
                    <input type="email" id="email" className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Mensaje</label>
                    <textarea id="message" rows={2} className="resize-none field-sizing-content mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]"></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-foundationcolorred1 text-white px-6 py-3 rounded-full hover:text-foundationcoloryellow2 transition-colors w-1/3 items-center justify-center">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;