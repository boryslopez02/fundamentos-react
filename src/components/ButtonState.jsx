import { useState } from "react";


const ButtonState =  () => {
    // let count = 0;

    const [count, setCount] = useState(1);

    // const arrayState = useState(0);
    // const stateNumber = arrayState[0];
    // const stateFunc = arrayState[1];

    const handleClick = () => {
        // count++;
        // console.log("here", count)
        setCount(count+1)
    }

    return <button onClick={handleClick}>Btn State {count}</button>
}

export default ButtonState;