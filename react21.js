import React from 'react';
const NameList=()=>{
    const names=['Alice','Bob','Charlie','Baby'];
    return(
        <ul>
            {names.map((names,index)=>(
                <li key={index}>{names}</li>
            ))}
        </ul>
    );
}
export default NameList;
---------------------------------------
App.js
import React from 'react';
import NameList from'./NameList';
const App=()=>{
  return(
    <div>
      <h1>NameList</h1>
      <NameList/>
    </div>
  );
};
export default App;