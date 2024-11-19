import './App.css'
import Card from "./components/Card"

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-lg text-black mb-5'>Tailwind css</h1>
      <Card username= "Rahul" />
      <br />
      <Card username= "priya"/>
       
    </>
  )
}

export default App;
