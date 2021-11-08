import React from "react";
import Display from "./display";
import Sairam from "./classcomponent";
import Kilometer from "./milestokm";
import User from "./useref";
function App(){
  
  return(
    <div>
      <h1>hello sairam</h1>
      <Display />
      <label>Varudu Kavalenu</label>
      <Sairam />
      <br />
      <Kilometer />
      <br></br>
      <User />
    </div>
  );
}
export default App;

