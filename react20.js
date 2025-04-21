import React from 'react';
const ItemList=()=>{
  const items=['Apple','ball','mango'];
  return(
    <ul>
      {items.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default ItemList;