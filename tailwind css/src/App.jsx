import { useState } from "react"
import Button from './Button'

function App(){
  const [data,setData] = useState(0);
  function addCounter(){
    setData(data +1);
  }
  return(
    <>
    <h1 className="text-purple-600">Hello World {data}</h1>
    <Button name = "click" func = {addCounter}/> 
    {/* <button onClick={addCounter}>add</button> */}
    
    </>
  )
}

export default App