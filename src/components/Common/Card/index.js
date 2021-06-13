/* import external modules */
import React from 'react'
import Image from '../Image/index'

const Card = ({ list }) => {
  return (
    <div className="card card--flex">
      {list.map((item) => (
        <div className="card__item" key={item.id}>
          <div className="card__image">
            <Image src={item.img} alt={item.title} />
          </div>
          <div className="card__title">{item.title}</div>
          <div className="card__description">{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Card
