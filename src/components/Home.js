import React from 'react'
import Cards from './Card'
import list from './data'


const Amazon = ({handleClick,inputText}) => {

  const filteredData=list.filter((el)=>{
    if(inputText==='') return el;
    return el.title.toLowerCase().includes(inputText);
  })

  return (
    <section className='row row-cols-4 justify-content-center'>
        {
            filteredData.map((item)=>(
            <Cards key={item.id} item={item} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon