import React, {useState} from "react";

const Superhero = ()=> {
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [height,setHeight] = useState(0)
    const [superPower,setSuperPower] = useState('')
    const [details,setDetails] = useState(false)
    return (
        <div>
            <header>
                <h1>SUPER HERO INFO</h1>
            </header>
            <div>
                <label htmlFor="name">Name : </label>
                <input type="text"
                       id={'name'}
                       style={{margin : 10}}
                       onChange={(e)=> setName(e.target.value)}/>

                <label htmlFor="age">Age : </label>
                <input type="number"
                       id={'age'}
                       style={{margin : 10}}
                       onChange={(e)=> setAge(e.target.value)}/>
                <label htmlFor="height">Height : </label>
                <input type="number"
                       id={'height'}
                       style={{margin : 10}}
                       onChange={(e)=> setHeight(e.target.value)}/>
                <label htmlFor="superpower">SuperPower : </label>
                <input type="text"
                       id={'superpower'}
                       style={{margin : 10}}
                       onChange={(e)=> setSuperPower(e.target.value)}/>
            </div>
            <button style={{marginTop : 30}}
                    onClick={()=>setDetails(!details)}>SHOW CONENTS</button>
            {details && (
                <ul>
                    <li>Name : {name}</li>
                    <li>Age : {age}</li>
                    <li>Height : {height}</li>
                    <li>SuperPower : {superPower}</li>
                </ul>
            )}


        </div>
    )
}
export default Superhero;