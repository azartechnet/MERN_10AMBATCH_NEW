import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*function Sample()
{
  return(
    <div>
    <h1 style={{backgroundColor:'red'}}>This is Heading</h1>
    <h1>This is Heading</h1>
    </div>
    
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Dynamic Rendering
/*const App=()=>{
  return(
    <div>
      <h1>Dynamic Rendering</h1>
      <button onClick={()=>alert("Button Clicked")}>Click Me</button>
      <p>Todays date::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React without JSX
// const App=<h1>Welcome to the Application</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(App)
//React with JSX
/*const App=()=>{
  return React.createElement("h1",null,"Welcome to the Application")
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(React.createElement(App,null))*/

  //React list

  const MyElem1=()=>{
    return(
      <div>
        <h1 style={{backgroundColor:"red"}}>My First Element</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ol>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<MyElem1/>)
