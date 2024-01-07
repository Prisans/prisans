import React from 'react'
import '../Cards/Cards.css'

const Cards = ({cardLogo , cardTitle , cardDes}) => {
  return (
    <div className="cards-container">
        <div className="card-box">
            <div className="card-logo">
                {cardLogo}
            </div>

            <div className="card-content">
                
                    <p className="card-heading">{cardTitle}</p>
                    <p className="card-description">{cardDes}</p>

            </div>
        </div>
    </div>
  )
}

export default Cards