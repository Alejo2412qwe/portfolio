import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => setStatus(''), 10000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xkndrjll', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative p-4 text-black w-full flex flex-col items-center py-32 md:py-32 bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-10">Contact Me</h1>
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Send
                        </button>
                        {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-600">There was an error sending your message. Please try again.</p>}
                        <div className="flex flex-col gap-4 md:flex-row md:gap-6 mt-6 text-gray-600">
                            <div className="flex items-center gap-3">
                                <EnvelopeIcon className="h-6 w-6 text-gray-600" />
                                <a href="mailto:coraspe.alejandro2@gmail.com" className="text-black hover:underline">coraspe.alejandro2@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <PhoneIcon className="h-6 w-6 text-gray-600" />
                                <a href="tel:+5541991246025" className="text-black hover:underline">{`+55 (41) 99124-6025`}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
