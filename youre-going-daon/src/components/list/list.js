import React from 'react'

function List() {
    let myList = ['hello', 'im', 'a', 'list'];
    return (
        <div>
            {myList.map((el)=>{
                return <div>{"\n" + el}</div>
            })}
        </div>
    )
}

export default List;
