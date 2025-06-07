import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Notification from './Notification';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => setStatus('idle'), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/xkndrjll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative py-32 w-full flex justify-center bg-gray-100">
            <div className="container px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-3">
                                <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                                <a href="mailto:coraspe.alejandro2@gmail.com" className="text-gray-700 hover:text-blue-600">
                                    coraspe.alejandro2@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <PhoneIcon className="h-5 w-5 text-gray-500" />
                                <a href="tel:+5541991246025" className="text-gray-700 hover:text-blue-600">
                                    +55 (41) 99124-6025
                                </a>
                            </div>
                        </div>
                    </form>

                    {status === 'success' && (
                        <Notification type="success" message="Message sent successfully!" />
                    )}
                    {status === 'error' && (
                        <Notification type="error" message="Failed to send message. Please try again." />
                    )}
                </div>
            </div>
        </section>
    );
}