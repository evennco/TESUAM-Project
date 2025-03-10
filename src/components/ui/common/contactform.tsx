"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Error al enviar el formulario");

            setSuccess("Formulario enviado con éxito");
            setFormData({ subject: "", name: "", email: "", message: "" });
        } catch (err) {
            setError("Hubo un problema, intenta nuevamente");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-foundationcolorwhite dark:bg-foundationcolorwhite p-6 rounded-lg">
            <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Asunto</label>
                    <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Nombre</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Correo</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foundationcolorblack dark:text-foundationcolorblack">Mensaje</label>
                    <textarea id="message" rows={2} value={formData.message} onChange={handleChange} className="resize-none field-sizing-content mt-1 block w-full p-4 border border-gray-300 rounded-3xl shadow-sm dark:placeholder-gray-400 dark:text-white bg-[#D9D9D9]"></textarea>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <div className="flex items-center justify-center">
                    <button type="submit" disabled={loading} className="bg-foundationcolorred1 text-white px-6 py-3 rounded-full hover:text-foundationcoloryellow2 transition-colors w-1/3 items-center justify-center">
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
