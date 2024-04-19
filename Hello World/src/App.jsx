import { useState } from "react";


function App(){
  let [num, setNum] = useState(0);
  function addNum(){
    setNum(num+1)
    console.log(num);
  };
  function subNum(){
    if(num === 0){
      console.log('Ab nh hoskta');
    }
    else{
      setNum(num-1);
    }
  }
  return(
    <>
     <h1>Hello World</h1>
     <button onClick={addNum}>add {num}</button>
     <button onClick={subNum}>Sub {num}</button>
    </>
  )
}

export default App