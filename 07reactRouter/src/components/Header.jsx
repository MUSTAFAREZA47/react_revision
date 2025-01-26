import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow-lg sticky z-50 top-0 bg-white">
            <nav className="bg-white border-gray-200 px-6 lg:px-8 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 hover:scale-105 transition-transform duration-300"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right Section (Login/Get Started) */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:text-orange-700 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition-colors duration-300"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-300"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg duration-300 ${
                                            isActive
                                                ? 'text-orange-700 bg-gray-100'
                                                : 'text-gray-700 hover:text-orange-700 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg duration-300 ${
                                            isActive
                                                ? 'text-orange-700 bg-gray-100'
                                                : 'text-gray-700 hover:text-orange-700 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg duration-300 ${
                                            isActive
                                                ? 'text-orange-700 bg-gray-100'
                                                : 'text-gray-700 hover:text-orange-700 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg duration-300 ${
                                            isActive
                                                ? 'text-orange-700 bg-gray-100'
                                                : 'text-gray-700 hover:text-orange-700 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
