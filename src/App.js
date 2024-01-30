
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";




function App() {
  const[mode, setmode]=useState('light');
  const[alert, setalert]=useState(null);
  const showalert=(message, type)=>{
   setalert({
    msg: message,
    type: type
   })
   setTimeout(()=>{
    setalert(null);
   }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
     setmode('dark');
     document.body.style.backgroundColor='#042743';
     showalert("Dark mode has been enabled", "success");
    // setInterval(()=>{
    // document.title='TextUtils is Amazing'
     //}, 2000);
     //setInterval(()=>{
     // document.title='Install TextUtils now'
     // }, 1500);
      

  }else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showalert("Light mode has been enabled", "success");
  }
}
  return (
    <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
    <Route exact path="/"
     element={<TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />}>
    </Route>
    <Route exact path="/about"
      element={<About />}>
    </Route>
</Routes>
</div>
</Router>

    </>
  );
}


export default App;
 