import React, { useState } from 'react'

export default function FooterComponent() {
   const [count, setCount] = useState(0) 
   const incrementCount =() => {
    setCount(count + 1)
   }
  return (
 
    <div>
      <p style={{marginTop: '70VH'}}>  Created by abilash <i className='fa-solid fa-heart' onClick={incrementCount} > </i> {count} </p>
    </div>
  )
}
