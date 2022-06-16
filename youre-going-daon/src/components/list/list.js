import React from 'react'
import Card from '../card/card';
import { useState } from 'react';

function List() {
    //pull api data here
    let myList = ['hello', 'im', 'a', 'list'];
    let data={}
    const [hiddenFlag, updateHiddenFlag] = useState(true);

    return (
            <div>
            {myList.map((el)=>{
                return <div onClick={()=>{updateHiddenFlag(!hiddenFlag); console.log("rendering: ", hiddenFlag)}}>
                    {"\n" + el}
                    
                </div>
            })}
            <Card hiddenFlag={hiddenFlag} info="example text" data={data}></Card>
        </div>

        
    )
}

export default List;
