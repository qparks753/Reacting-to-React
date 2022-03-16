import React from 'react';
import Greeter from './components/Greeter';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
    
   const [username, setUserName] = useState("");
   const [loaded, setLoaded] = useState(false);
   
   useEffect(()=> {
    setTimeout(()=>{
    setLoaded(true);
    },3000)
   },[loaded]);

  if(loaded === false){
    return (
    <>
    "Website loading ..."<br></br>
    <button onClick={()=>setLoaded(true)}>  Click to Proceed</button> 
    <br></br>
   </>
    )
  };


  return (
        <>
            <h1>Hello World</h1>
            <Greeter name=" Michael !" phrase="Hello There " />
            <Greeter name=" Lauren ?" phrase="How are you " />
            <Greeter name=" Jackson !" phrase="Nice Day " />
            <input value={username}  onChange={(e)=>{
              setUserName(e.target.value) }} />   
            <p>Hello, You are logging in as: {username}</p> 
            
        </>

    )


}


export default App;