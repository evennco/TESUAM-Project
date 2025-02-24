"use client"
import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="bg-white dark:bg-foundationcolorwhite p-6 rounded-lg shadow-md">
            <form className="space-y-6 text-left">
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Asunto</label>
                    <input type="text" id="subject" className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm dark:placeholder-gray-400 dark:text-white bg-gray-500" />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Nombre</label>
                    <input type="text" id="name" className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm dark:placeholder-gray-400 dark:text-white bg-gray-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Correo</label>
                    <input type="email" id="email" className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm dark:placeholder-gray-400 dark:text-white bg-gray-500" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Mensaje</label>
                    <textarea id="message" rows={2} className="resize-none field-sizing-content mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm dark:placeholder-gray-400 dark:text-white bg-gray-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-foundationcolorblack text-white py-3 px-4 rounded-md shadow-sm hover:bg-foundationcoloryellow2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foundationcolorblack">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;