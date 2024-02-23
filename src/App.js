import React,{useState} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const[showparagraph,setshowparagraph]=useState(false);
  console.log('APP RUNNING!!');

  const toggleparagraphhandler=()=>{
    setshowparagraph((prevshowparagraph) =>!prevshowparagraph)

  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleparagraphhandler}>Toggle Paragraph!</Button>
     
    </div>
  );
}

export default App;
