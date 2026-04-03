import React from 'react'
import Second from './Second'

const First = () => {
    const obj = {
      name : "nitin", age:"21" ,
  }
  return (
    <div>
        <Second objj = {obj}/>
        
    </div>
  )
}

export default First