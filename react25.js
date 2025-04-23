import React, {Component} from 'react';
class ScrollToElement extends Component{
  constructor(props){
  super(props);
    this.myRef=React.createRef();
  }
  handleClick=()=>{
    this.myRef.current.scrollIntoView({behavior:'smooth'})
  }
  render(){
    return(
      <div>
      <button onClick={this.handleClick}>Scroll to Element</button>
      <div style={{height:'500px'}}></div>
      <div ref={this.myRef}style={{height:'100px',background:'yellow'}}>
        scroll to this element
      </div>
    </div>
  );
}
}
export default ScrollToElement;