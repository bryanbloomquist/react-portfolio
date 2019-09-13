import React from "react";

const MemberCard = ( props ) => {

  return (

    <a 
      className = "btn pageLink p-1"
      href = { props.website }
      title = { props.name }
      target = "_blank"
      rel = "noopener noreferrer"
    >
      { props.name }
    </a>

  )
  
}

export default MemberCard;