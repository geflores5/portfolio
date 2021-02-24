import React from 'react'

const Card = (props) => {
  return (
    <div className={cardStyles.container} >
      {props.children}
    </div>
  )
}

export default Card