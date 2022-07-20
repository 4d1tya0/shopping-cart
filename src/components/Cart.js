import React, { useEffect, useState } from 'react'

const Cart = ({cart,setCart,handleChange}) => {
    const[price,setPrice]=useState(0);

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=> item.id!==id);
        setCart(arr);
        
    };

    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>(ans+=item.amount*item.price));
        setPrice(ans);
    };

    useEffect(()=>{
        handlePrice();
    });
  return (
    <article>
      
        {cart.map((item) => (
        <div className="cart_box d-flex align-items-center justify-content-between mt-4 pb-2 border-bottom border-dark" style={{margin:"0px 200px 0px 200px"}} key={item.id}>
          <div className="cart_img d-flex ">
            <img style={{width:'100px'}} src={item.img} alt="" />
            <h5>{item.title}</h5>
          </div>
          <div className=''>
            <button className='btn btn-outline-dark fw-bold mx-1' onClick={() => handleChange(item, 1)}>+</button>
            <button className='btn btn-outline-dark fw-bold mx-1'>{item.amount}</button>
            <button className='btn btn-outline-dark mx-1' onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span className='bg-info bg-opacity-50 rounded mx-4 p-1'>₹{item.price}</span>
            <button className='btn btn-danger' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total d-flex justify-content-between fs-2" style={{margin:"0px 200px 0px 200px"}}>
        <span className=''>Total Price of your Cart:</span>
        <span className='fw-bold'>₹{price}</span>
      </div>
      
    </article>
  )
}

export default Cart