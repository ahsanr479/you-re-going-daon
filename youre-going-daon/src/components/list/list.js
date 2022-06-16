import React from 'react'
import Card from '../card/card';
import { useState } from 'react';

function List() {
    //pull api data here
    let myList = ['hello', 'im', 'a', 'list'];
    const [hiddenFlag, updateHiddenFlag] = useState(true);
    const [selectedData, updateData] = useState();
    const [selectedIndex, updateIndex] = useState();
    const updateState = (data, index) => {
        updateData(data);
        updateIndex(index);
    }

    const logic = (currIndex) => {
        if (selectedIndex === currIndex && (hiddenFlag || !hiddenFlag)) {
            updateHiddenFlag(!hiddenFlag)
            console.log("case 1: ", currIndex)
        } else if (selectedIndex != currIndex) {
            updateState(myList[currIndex], currIndex)
            if (hiddenFlag) {
                updateHiddenFlag(!hiddenFlag)
            } 
            console.log("case 2: ", currIndex)
        } 
    }
    return (
            <div>
            {myList.map((el, index)=>{
                return <div onClick={()=>{logic(index)}}>
                    {"\n" + el}
                    
                </div>
            })}
            <Card hiddenFlag={hiddenFlag} info={selectedData}></Card>
        </div>
    )
}

export default List;
