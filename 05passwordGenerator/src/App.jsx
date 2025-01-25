import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
    const [length, setLength] = useState('')
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    //useRef hook
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) str += '0123456789'
        if (charAllowed) str += '!@#$%^&*-_+=[]{}~`'

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }

        setPassword(pass)
    }, [length, numberAllowed, charAllowed])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 999)
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 text-white">
            <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-6 py-4 bg-gray-900 text-orange-400">
                <h1 className="text-2xl font-bold text-center mb-5">
                    Password Generator
                </h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-2 px-3 text-white"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 font-semibold"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-center justify-between">
                        <label className="font-medium">Length: {length}</label>
                        <input
                            type="range"
                            min={6}
                            max={20}
                            value={length}
                            className="cursor-pointer w-3/4"
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input
                            type="checkbox"
                            id="numberInput"
                            defaultChecked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <label htmlFor="numberInput" className="cursor-pointer">
                            Include Numbers
                        </label>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <input
                            type="checkbox"
                            id="characterInput"
                            defaultChecked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label
                            htmlFor="characterInput"
                            className="cursor-pointer"
                        >
                            Include Special Characters
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
