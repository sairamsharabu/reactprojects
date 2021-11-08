import React from "react";
export function Kilometer(){
    const[km,setkm]=React.useState(0);
    var changing=(Text)=>{
        setkm(Text.target.value);
    }
    var setting=(km)=>{
        return (km/1.609).toFixed(2);
    }
    return(
        <div>
            <input type="text" value={km} onChange={changing}></input>
            <p>{km}km  is convert to {setting(km)}miles </p>
        </div>
    );

}
export default Kilometer;
