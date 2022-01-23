import logo from './logo.svg';
import './App.css';
import Data from "./data.json"
import NewsTab from "./components/NewsTab"
import { useState } from 'react';

function App() {
  let singleData = Data[0]
  let arrayData = []
  const [count,setCount] = useState(0)

  for(let i = count; i< count+6 ;i++){
    arrayData.push(Data[i])
  }
  
  
  function handleClick(){
  setCount(count+6)
  }


  return (
    <div>
      <h1>Personal News</h1>
      <div className='next'>
        <div className='newBox'>
          {arrayData.map(x=>(
            <NewsTab data={x} />
          ))}
        </div>
        <button onClick={handleClick}>next</button>
      </div>
       

    </div>
  );
}

export default App;
