import { useState } from 'react';
import './App.css'

function App(){
  const[counter,setCounter]=useState(0);
  const stock = 20;
  return(
      <>
      <h1>Counter App In React</h1>
      <div className='wrapper'>
      
      <button className='btn-'disabled={counter === 0} onClick={()=>{
        if (counter>0){
               setCounter(counter-1)
        }
        
      }}>Decrease</button>
      <p>{counter}</p>
      <button className='btn'disabled={counter === stock}onClick={()=>{
        if (counter<stock){
               setCounter(counter+1)
        }
        
      }}>Increase</button>
    </div>
      </>
      
      
  )
}
export default App;

//     return(
  //        <div className="header">
  //        <div className='logo'>
  //            <img  className="logo" alt="logo-image" src="https://t4.ftcdn.net/jpg/04/29/34/73/360_F_429347358_0bZXH1wJaOjBxFL5ENJc5p9yiMa9yUxp.jpg" />
  //        </div>
  //        <div className='navItems'>
  //  <ul>
  //  <li>Home</li>
  //  <li>About Us</li>
  //  <li>Contact Us</li>
  //  <li>Cart</li>
  //  </ul>
  //        </div>
  //    </div>