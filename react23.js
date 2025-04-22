import React, {useRef} from 'react';
const ScrollToElement=()=>{
  const myRef=useRef(null);
  const handleClick=()=>{
    myRef.current.scrollIntoView({ behavior :'smooth'});
  };
  return(
    <div>
      <button onClick={handleClick}>Scroll to Element</button>
      <div style={{height:'{500px'}}></div>
      <div ref={myRef}style={{height:'100px',background:'yellow'}}>
        scroll to this element
      </div>
    </div>
  );
};
export default ScrollToElement;