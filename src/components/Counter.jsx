import { useState } from "react";

export function Counter(){
    const [counter, setCounter] = useState(0)

    function Increment(){
        setCounter(counter + 1)
    }
    return(
        <div className="">
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>
                Increment + 1
            </button>
        </div>
    )
}