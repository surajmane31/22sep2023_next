// import area
import React from 'react'
import C from './C';

// defination area
function B(props) {
    console.log();
  return (
    <>
    
    <div>B components {props.name}</div>
    <C> {props.name}</C>
    </>
  )
}
// export area
export default B