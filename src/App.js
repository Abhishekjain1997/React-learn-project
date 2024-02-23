import React,{useState,useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const[showparagraph,setshowparagraph]=useState(false);
  const[allowtoggle,setallowtoggle]=useState(false);
  console.log('APP RUNNING!!');

  const toggleparagraphhandler=useCallback(()=>{
    if (allowtoggle){
    setshowparagraph((prevshowparagraph) =>!prevshowparagraph);
    }
  },[allowtoggle])

  const allowtogglehandler =()=>{
    setallowtoggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showparagraph}/>
      <Button onClick={allowtogglehandler}>Allow Toggling</Button>
      <Button onClick={toggleparagraphhandler}>Toggle Paragraph!</Button>
     
    </div>
  );
}

export default App;
