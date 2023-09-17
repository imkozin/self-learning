import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        hobby: 'Tennis'
    });

    const displayPerson = () => {
        // setPerson({
        //     name: 'John',
        //     age: 28,
        //     hobby: 'Basketball'
        // })
        setPerson({...person, hobby: 'Soccer'})
    }

    const { name, age, hobby } = person
    return (
        
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>Enjoys: {hobby}</h3>
            <button className="btn" onClick={displayPerson}>show</button>
        </>
    )
}

export default UseStateObject;