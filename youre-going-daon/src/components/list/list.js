import React from 'react'
import Card from '../card/card';

function List() {
    //pull api data here
    let myList = ['hello', 'im', 'a', 'list'];
    let hiddenFlag = true;
    return (
        <div>
            {myList.map((el)=>{
                return <div onClick={()=>{hiddenFlag=!hiddenFlag}}>
                    {"\n" + el}
                    <Card hidden={hiddenFlag} info="example text"></Card>
                </div>
            })}
        </div>
    )
}

export default List;
