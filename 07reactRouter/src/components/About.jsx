import React from 'react'

export default function About() {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto px-6 md:px-12 xl:px-16">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-10 lg:gap-16">
                    <div className="md:w-1/2 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="React Development"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 lg:w-7/12">
                        <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl lg:text-5xl leading-snug">
                            React Development by Passionate Experts
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eum omnis voluptatem accusantium nemo
                            perspiciatis delectus atque autem! Voluptatum
                            tenetur beatae unde aperiam, repellat expedita
                            consequatur! Officiis id consequatur atque
                            doloremque!
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Nobis minus voluptatibus pariatur dignissimos libero
                            quaerat iure expedita at? Asperiores nemo possimus
                            nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
