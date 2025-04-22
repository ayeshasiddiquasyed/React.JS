import React from 'react';
const ItemList=()=>{
  const items=[
    {id:1,name:'Apple'},
    {id:2,name:'banana'},
    {id:3,name:'cherry'},
  ];
  return(
    <ul>
      {items.map(item=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default ItemList;