import React, { useEffect, useState } from "react";

export default (params)=>{
    const [counter, setCounter] =useState(params.date);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
      
    return(
        <>
        c
        </>
    )
}

