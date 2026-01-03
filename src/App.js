
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';          //imrs
import Alert from './components/Alert';
// import About from './components/About';
// import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
 const[mode,setMode]=useState('light');    //STATE VARIABLE = mode  
 const[alert,setAlert]=useState(null);     //alert=state variable and object
  
  const showAlert = (message,type)=>{
      setAlert({
       msg:message,
       type:type})
       setTimeout(() => {
        setAlert(null);
       }, 750);
  }

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
   {/*  <Router> */}
    <Navbar title="TextUtils" aboutText="About Utils" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>     
    <div className="container my-3">
  
  {/* <Routes> */}
      {/*</Routes><Route exact path='/about' element={<About/>}/> 8/}
      <Route exact path="/" element={ }/>   
    {/*</Routes>*/} 

       <TextForm showAlert={showAlert} heading="Enter The Text to Analyse Below" mode={mode}/>
    </div>
   {/* </Router> */}
    </>
  );
}

export default App;
