import React, { useEffect } from 'react'

function Card(props) {
  return (
    <div hidden={props.hiddenFlag}>
      {console.log(props.info)}
      { props.info ? <div>
            <h1>{props.info.projectName}</h1>   
            <p>{props.info.projectDescription}</p>   
            <h2>Team Members</h2>
            <div>
              {
              props.info.teamMembers.map((el) => {
                return <div>
                  <p>Name: {el.name} </p>
                  <p hidden> {el.id} </p>
                </div>
              })}
            </div>
          </div>
          : null 
        }
    </div>
  )
}

export default Card;