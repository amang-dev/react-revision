import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  function passwordGenerator() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRESTVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!#$%^&*()_+}{[]/?>-";
    
    for (let i = 1; i <= length; i++) {
      let randomNum = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNum);
    }
    

    setPassword(pass);
  }

  const copyPasswordtoClip = useCallback(()=>{
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center  text-2xl my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}

          />

          <button onClick={copyPasswordtoClip} className="outline-none shrink-0 bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-transform transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="font-bold">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=>{return !prev})
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => {
               return !prev;
              });
            }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
