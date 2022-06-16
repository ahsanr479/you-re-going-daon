import React from 'react'
import Card from '../card/card';
import { useState } from 'react';

function List() {
    //pull api data here
    let myMockJson = {"data" :
        [
            {"teamId" : 12345, "projectName" : "Project Name 1", "projectDescription": "This is the description of project 1", "teamMembers" : [{"name": "David", "id" : 12345}, {"name": "Sabir", "id": 54321}]}, 
            {"teamId" : 54321, "projectName" : "Project Name 2", "projectDescription": "This is the description of project 2", "teamMembers" : [{"name": "Insert Name", "id" : 12345}, {"name": "Insert Name", "id": 54321}]}
        ]
    };
    const [hiddenFlag, updateHiddenFlag] = useState(true);
    const [selectedData, updateData] = useState();
    const [selectedIndex, updateIndex] = useState();
    const updateState = (data, index) => {
        updateData(data);
        updateIndex(index);
    }

    const logic = (currIndex, el) => {
        if (selectedIndex === currIndex && (hiddenFlag || !hiddenFlag)) {
            updateHiddenFlag(!hiddenFlag)
            console.log("case 1: ", currIndex)
        } else if (selectedIndex != currIndex) {
            updateState(el, currIndex)
            if (hiddenFlag) {
                updateHiddenFlag(!hiddenFlag)
            } 
            console.log("case 2: ", currIndex)
        } 
    }
    return (
            <div>
                {myMockJson.data.map((el, index)=>{
                return <div onClick={()=>{logic(index, el)}}>
                        <h1>{el.projectName}</h1>   
                        <p>{el.projectDescription}</p> 
                </div>
            })}
            <Card hiddenFlag={hiddenFlag} info={selectedData}></Card>
        </div>
    )
}

export default List;
