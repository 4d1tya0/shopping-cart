import React, {useState } from 'react'
import Amazon from './components/Home'
import Cart from './components/Cart';
import Navbar from './components/navbar'


const App = () => {
  
  const[show, setShow]= useState(true);
  const[cart, setCart]= useState([]);
  const[inputText, setInputText]=useState("");

  const handleClick= (item)=>{
    if(cart.indexOf(item)!==-1) return;
    item.amount=1;
    setCart([...cart, item]);
  };

  const handleChange=(item,d)=>{
    const ind=cart.indexOf(item);
    const arr=cart;
    arr[ind].amount+=d;

    if(arr[ind].amount===0) arr[ind].amount=1;
    setCart([...arr]);
  }
  
  const inputHandler=(e)=>{
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }
  
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} inputHandler={inputHandler}/>
      {
        show?(
          <Amazon handleClick={handleClick} inputText={inputText}/>
        ):(
          <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        )
      }
    </React.Fragment>
  )
}

export default App
