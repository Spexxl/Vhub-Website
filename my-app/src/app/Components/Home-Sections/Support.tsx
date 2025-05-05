import { useState } from 'react';

export default function SupportSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="w-full px-4 py-16 md:py-24 bg-white relative z-50 min-h-screen flex flex-col gap-20"
        id='/#suporte'>
            <div className="whitespace-nowrap overflow-hidden text-[7vw] font-extrabold uppercase text-black border-b border-black leading-none mb-12">
                <div className="inline-block animate-scrollX">
                    SUPORTE&nbsp;&nbsp;SUPORTE&nbsp;&nbsp;SUPORTE&nbsp;&nbsp;
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg md:text-xl">
                        Ensira o seu email e o problema que está enfrentando que iremos te ajudar!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-base font-medium">Nome:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Informe o Problema:</label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            rows={5}
                            className="w-full mt-1 border border-gray-300 rounded px-4 py-2"
                            placeholder="Enter your message"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 inline-flex items-center gap-2 border border-black px-6 py-2 rounded-xl font-semibold hover:bg-[#F8DC27] hover:border-[#F8DC27]
                        transition cursor-pointer"
                    >
                        ENVIAR
                    </button>
                </form>
            </div>
        </section>
    );
}
