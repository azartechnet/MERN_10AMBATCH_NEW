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

/*function Football()
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
r1.render(<Football/>)*/

//React Argument Passing

/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <div>
      <button onClick={()=>shoot(2022)}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>Goal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return <MadeGoal/>
  }
  else
  {
    return <MissedGoal/>
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={false}/>)*/

//React Keys

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:'BMW'},
    {id:2,name:'Audi'},
    {id:3,name:'Mercedes'}
    ]
    return(
      <div>
        <ul>
          {cars.map((car)=><Car id={car.id} name={car.name}/>)}
        </ul>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }

  static getDerivedStateFromProps(props,state)
  {
    console.log('getDerivedStateFromProps called');
    return{count:props.count}
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10}/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
    console.log('componentDidMount called');
    setTimeout(()=>{
      this.setState({favcolor:"blue"})
    },6000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//Update getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log('getDerivedStateFromProps called');
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//usestate Hooks

import { useState,useEffect } from 'react';

/*function Counter()
{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("azar");
  return(
    <div>
      <p>Count is {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <p>My name is {name}</p>
      <button onClick={()=>setName("Rahul")}>Change Name</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Another Example

/*function ThemeSwitcher()
{
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return(
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Current theme: {theme}</p>
      </div>
      )
}
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<ThemeSwitcher/>)*/

 //useEffect

 /*function ClickCounter()
 {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    }, [count]);
    return(
      <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<ClickCounter/>)*/

 //React using without useContext

 /*function Component1()
 {
  const [user,setUser]=useState("mohamed")
  return(
    <div>
      <p>Component 1</p>
      <p>Username: {user}</p>
      <button onClick={() => setUser("mohamed ali")}>Change Username</button>
      <Component2 user={user}/>
    </div>
  )
 }
 function Component2(props)
 {
  return(
    <div>
      <p>Component 2</p>
      <p>Username: {props.user}</p>
    </div>
  )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>)*/

 //React using useContext

 import { useContext,createContext } from 'react';
  const UserContext=createContext();
 function Component1()
 {
  const [user,setUser]=useState("mohamed");
  return(
    <UserContext.Provider value={user}>
      <h1>Component1 username is::{user}</h1>
      <Component2/>
    </UserContext.Provider>
  )
 }
 function Component2()
 {
  const user = useContext(UserContext);
  return(
    <div>
      <h1>Component2 username is::{user}</h1>
      </div>
      )
 }
 const  r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>)
 
