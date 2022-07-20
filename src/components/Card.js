import React from 'react'

const Cards = ({item, handleClick}) => {

  const {title, author, price, img}=item;
  return (
  
    <div className="border rounded m-4">
      <img src={img} className="img-fluid" alt="" />
      <div className="p-2">
            <h5 className="">{title}</h5>
            <p>{author}</p>
            <h5>₹{price}</h5>
            <p className='btn btn-primary' onClick={()=>handleClick(item)} href="/"> Add to cart </p>
      </div>
    </div>


  )
}

export default Cards