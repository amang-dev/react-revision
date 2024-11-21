import { useState } from "react"

function App() {

     const [color, setColor] = useState("olive")

  return (
    
   <div className="w-full h-screen" style={{backgroundColor: color}}>
         
         <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">

            <div className="flex, flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl">


                  <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-1" style={{backgroundColor:"Blue"}}>Blue</button>
                  <button onClick={()=>setColor("red")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-1" style={{backgroundColor:"red"}}>Red</button>
                  <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-1" style={{backgroundColor:"Green"}}>Green</button>
            </div>
         </div>
   </div>
  )
}

export default App
