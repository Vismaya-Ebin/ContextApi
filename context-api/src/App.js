
import "./App.css";
// import { useState ,createContext ,useContext } from "react";
import React, { useContext, useState, createContext } from "react";
 
 const  initialState = 100;
 const context = createContext(initialState);
function App() {
  
  const [state,setState] = useState(initialState);
 
  const obj ={state:state,setState:setState};
 
  
  return(<div>
    <context.Provider  value = {obj}>
    <Child></Child>
    </context.Provider>
  </div>)
}
 
function Child(){
return(<div><GrandChild></GrandChild></div>);
}

function GrandChild(){
  const {state,setState} = useContext(context);
  
  console.log("OBJECT", {state,setState});

  return(<div>
    <button onClick={()=>setState(state + 1)}>Increment</button>
    <p>{state}</p>
    <List/>
  </div>);

}

function List(){
  const [initialMode,updateMode] = useState("light");
  const styles={background: (initialMode ==="light")?"black":"white"};
  
  return(<div style={styles}>
    
    <ul>
<ListItem value="light" initialMode={initialMode} updateMode={updateMode}/>
<ListItem value="dark" initialMode={initialMode} updateMode={updateMode}/>
    </ul>
  </div>)
}
  
function ListItem({value,initialMode,updateMode}){
 
  return(<div>
    <li><Button value={value} initialMode={initialMode} updateMode={updateMode}/></li>
   
  </div>)
}

function Button({value,initialMode,updateMode}){
  const styles={background: (initialMode === "light")?"white":"black",color: (initialMode ==="light")?"black":"white"};
  //
  return(<div>  <button  style={styles} onClick={()=>{updateMode(value)}}>{value}</button></div>)
 
}
export default App;
