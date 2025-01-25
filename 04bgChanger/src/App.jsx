import { useState } from 'react'

function App() {
    const [color, setColor] = useState('olive')

const generateRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 256) // Random number between 0-255
    const randomGreen = Math.floor(Math.random() * 256) // Random number between 0-255
    const randomBlue = Math.floor(Math.random() * 256) // Random number between 0-255

    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    setColor(randomColor)
}


    return (
        <div
            className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-4 py-3 rounded-3xl">
                    <button
                        onClick={() => setColor('red')}
                        className="outline-none px-6 py-2 rounded-full text-white shadow-md hover:scale-105 active:scale-95 transform transition duration-200"
                        style={{ backgroundColor: 'red' }}
                    >
                        Red
                    </button>
                    <button
                        onClick={() => setColor('green')}
                        className="outline-none px-6 py-2 rounded-full text-white shadow-md hover:scale-105 active:scale-95 transform transition duration-200"
                        style={{ backgroundColor: 'green' }}
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor('blue')}
                        className="outline-none px-6 py-2 rounded-full text-white shadow-md hover:scale-105 active:scale-95 transform transition duration-200"
                        style={{ backgroundColor: 'blue' }}
                    >
                        Blue
                    </button>
                    <button
                        onClick={generateRandomColor}
                        className="outline-none px-6 py-2 rounded-full text-white shadow-md hover:scale-105 active:scale-95 transform transition duration-200"
                        style={{ backgroundColor: '#333' }}
                    >
                        Random Color
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
