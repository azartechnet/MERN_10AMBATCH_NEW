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

  /*const MyElem1=()=>{
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
  r1.render(<MyElem1/>)*/
  //React Conditional Rendering
  //if ifelse nested if else
  /*const x=20;
  let text="";
  if(x>10)
  {
    text="Greater than 10";
  }
  else if(x==10)
  {
    text="Equal to 10";
  }
  else
  {
    text="Less than 10";
  }
  const MyElem2=()=>{
    return(
      <div>
        <h1 style={{backgroundColor:"red"}}>My First Element</h1>
        <p>{text}</p>
      </div>
      )
      }
      const r1=ReactDOM.createRoot(document.getElementById('root'))
      r1.render(<MyElem2/>)*/

  //import css file
  /*import './index.css';
  const App=()=>{
    return(
      <h1>Welcome</h1>
      )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App/>)*/

  //Function Component

  /*function Sample()
  {
    return(
      <div>
        <h1>Sample</h1>
        <form>
          <label>Enter your name:</label>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //React Class Component

  /*class Sample extends React.Component
  {
    render()
    {
      return(
        <div>
          <h1>Sample</h1>
        </div>
      )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //Function Component with arguments

  /*function Sample(props)
  {
    return(
      <div>
        <h1>Sample</h1>
        <h1>Hello {props.name}{props.age}</h1>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample name="Rahul" age="20"/>)*/

  //React component in component

  /*function Component1()
  {
    return(
      <div>
        <h1>Component 1</h1>
        <Component2/>
      </div>
    )
  }

function Component2()
{
  return(
    <div>
      <h1>Component 2</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//constructor using super

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:35}
  }
  render()
  {
    return(
      <div>
        <h1>Sample</h1>
        <h1>Hello {this.state.name}{this.state.age}</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
   constructor(props)
   {
     super(props)
     this.state={name:"azar",age:56}
     this.handleClick=this.handleClick.bind(this)
   }
   handleClick()
   {
    this.setState({age:40})
   }
   render()
   {
    return(
      <div>
        <h1>Hello{this.state.name}{this.state.age}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      emp:{
        name:"azar",
        age:30,
        city:"nkl"
      },
      showData:false
    }
  }
  showData()
  {
    this.setState({
      showData:true
    })
  }
  hideData()
  {
    this.setState({
      showData:false
    })
  }
  render()
  {
    let data;
    if(this.state.showData==true)
    {
      data=<div>
        <h1>Employee Name:{this.state.emp.name}</h1>
        <h1>Employee Age:{this.state.emp.age}</h1>
        <h1>Employee City:{this.state.emp.city}</h1>
        <button onClick={this.hideData.bind(this)}>Hide</button>

      </div>
    }
    else
    {
      data=<button onClick={this.showData.bind(this)}>Show</button>
    }
    return(
      <div>
        {data}
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

function Football()
{
  const shoot=()=>{
    alert("Goal")
  }
  return(
    <div>
      <button onClick={shoot}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)

