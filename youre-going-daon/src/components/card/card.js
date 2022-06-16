import React, { useEffect } from 'react'
import InfoModal from '../modal/modal'



function Card(props) {


  useEffect(() => {
    renderModal()
  },[])

  const renderModal = () => {
    console.log('rendring data')
    return(
      <InfoModal/>
    )
  }

  return (
    <div hidden={props.hiddenFlag}>
      {console.log(props.info)}
      { props.info ? <div className="jumbotron">
          <h1 className="display-4">{props.info.projectName}</h1>
          <p className="lead">{props.info.projectDescription}</p>
          <div>
            {
            props.info.teamMembers.map((el) => {
              return <div>
                <p>Name: {el.name} </p>
                <p hidden> {el.id} </p>
              </div>
            })}
          </div>
  {/* <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button" >Vote</a>
  </p> */}
  <InfoModal/>
</div>

          : null 
        }
    </div>
  )
}

export default Card;