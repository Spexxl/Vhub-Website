"use client";

import { useState } from 'react';

export default function CallUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="w-full px-4 py-16 md:py-24 bg-[#222427] relative min-h-screen flex flex-col gap-20"
        id='suporte'>
            <div className="whitespace-nowrap overflow-hidden text-[7vw] font-extrabold uppercase text-black border-b border-[#ffffff50] leading-none mb-12">
                <div className="inline-block text-white animate-scrollX">
                    FALE CONOSCO&nbsp;&nbsp;FALE CONOSCO&nbsp;&nbsp;FALE CONOSCO&nbsp;&nbsp;
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg text-white md:text-xl">
                        Tem alguma ideia, proposta de parceria ou simplesmente gostaria de bater um papo com a gente? Envie sua mensagem!
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const mailtoLink = `mailto:contato@vibranthub.com.br?subject=Suporte - ${encodeURIComponent(
                            formData.name
                        )}&body=Email: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMensagem:%0D%0A${encodeURIComponent(
                            formData.message
                        )}`;
                        window.location.href = mailtoLink;
                    }}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-base text-white font-medium">Nome:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full mt-1 border text-white border-gray-300 rounded px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base text-white font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base text-white font-medium">Informe o Problema:</label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            rows={5}
                            className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 inline-flex text-white items-center gap-2 border border-white px-6 py-2 rounded-xl font-semibold hover:bg-[#F8DC27] hover:border-[#F8DC27]
                        transition cursor-pointer"
                    >
                        ENVIAR
                    </button>
                </form>
            </div>
        </section>
    );
}
