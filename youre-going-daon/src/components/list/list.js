import React from 'react'

function List() {
    //pull api data here
    let myList = ['hello', 'im', 'a', 'list'];
    return (
        <div>
            {myList.map((el)=>{
                return <a href='#' onClick={()=>{alert('You Clicked Me!')}}>
                    {"\n" + el}
                </a>
            })}
            
        </div>
    )
}

export default List;
