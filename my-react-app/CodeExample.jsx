import { useState } from "react";

const CodeExample = () => {
    const [value, setValue] = useState(0);

    const sayHello = () => {
        console.log('hello there');
    }
    sayHello();
    return (
        <div>
            <h1>value: {value}</h1>
            <button type="button" className="btn" onClick={()=> setValue(value + 1)}>click</button>
        </div>
    )
}

export default CodeExample;