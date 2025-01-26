import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 sm:pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 bg-gray-100">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                                Get in touch
                            </h1>
                            <p className="mt-4 text-lg text-gray-600">
                                We'd love to hear from you. Fill out the form
                                below to start the conversation!
                            </p>
                            <div className="mt-8 space-y-6 text-gray-600">
                                <div className="flex items-center">
                                    <svg
                                        className="w-8 h-8 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md font-semibold">
                                        Acme Inc, Street, State, Postal Code
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-8 h-8 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md font-semibold">
                                        +44 123 456 7890
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="w-8 h-8 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md font-semibold">
                                        info@acme.org
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 flex flex-col justify-center bg-white">
                            <div className="flex flex-col mb-4">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    className="mt-2 py-3 px-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="mt-2 py-3 px-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label
                                    htmlFor="tel"
                                    className="text-sm font-semibold text-gray-600"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Your phone number"
                                    className="mt-2 py-3 px-4 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
