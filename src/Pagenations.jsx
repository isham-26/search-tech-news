import React from 'react'
import { useGlobalContext } from './context'
const Pagenations = () => {
   const{page,nbPages,dicrement,increment} = useGlobalContext(); 
  return (
    <div className='page'>
        <button className='button' onClick={dicrement}>PREVIES</button>
        <span className="">{page+1} To {nbPages}</span>
        <button className='button' onClick={increment}>NEXT</button>
    </div>
  )
}

export default Pagenations