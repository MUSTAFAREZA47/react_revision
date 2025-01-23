

import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
      <h1 className='bg-amber-600 p-4'>Tailwind CSS</h1>
      <Card username="Ahmed Reza" btnText='Buy More'/>
      <Card username="John Doe" btnText='Visit Me'/>
    </>
  )
}

export default App
