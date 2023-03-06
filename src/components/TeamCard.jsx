import React from 'react'
import  './TeamCard.css'

const TeamCard = ({ name, position, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="img"/>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  )
}

export default TeamCard