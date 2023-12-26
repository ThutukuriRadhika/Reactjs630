import React from 'react'
import Count from './Count'
import Button from './Button'
import { useState } from 'react'
import Title from './Title'
import { useCallback } from 'react'

const Main = () => {
    let [age, setAge] = useState(25)
    let [salary, setSalary] = useState(25000)

    let increAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    let increSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return(
        <div>
            <Title/>
           <Count data={age}>Age</Count>
           <Button Func={increAge}>Incre-AGE</Button>
           <Count data={salary}>Salary</Count>
           <Button Func={increSalary}>Incre-Salary</Button>
        </div>
    )
}
export default Main