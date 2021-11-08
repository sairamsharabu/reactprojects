import React, { useEffect } from "react";
export function User(){
    var data=React.useRef(null);
    const submintHandler=e=>{
        e.preventDefalt();
        console.log(data.current.value);
    }
    useEffect(()=>{
        data.current.focus();
    },[])
    return(
        <div>
            <form onSubmit={submintHandler}>
                <input type="text" placeholder="enter any name" ref={data}></input><br /><br />
                <input type="submit" ></input>
            </form>
        </div>
    );
}
export default User;