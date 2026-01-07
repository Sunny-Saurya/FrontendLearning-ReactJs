import React from 'react'
import { useState } from 'react';
const WithoutUseContext = () => {

    const [subject, setsubject] = useState("React");

  return (
    <div>
        <h2>This is my first component and i am passing the value to second componentA</h2>
        <ComponentA subject = {subject} />
    </div>
  )
}

const ComponentA = ({subject}) => {
    return(
        <>
            <h2>This is the component B and taking the valye from the WithoutUseContext</h2>
            <ComponentB subject={subject} />
        </>
    )
}

const ComponentB = ({subject}) => {
    return(
        <>
                    <h2>This is the component C and taking the valye from the WithoutUseContext</h2>
                    <ComponentC subject={subject} />

        </>
    )
}

const ComponentC = ({subject}) => {
    return(
        <>
                    <h2>This is the component A and taking the valye from the WithoutUseContext</h2>
                    <ComponentD subject={subject} />

        </>
    )
}

const ComponentD = ({subject}) => {
    return(
        <>
                    <h2>I am studying : {subject}</h2>
                    

        </>
    )
}


export default WithoutUseContext;