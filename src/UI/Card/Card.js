import React from 'react'
import './Card.css'

const Card = ({ data, reset }) => {
  return (
    <div className='main'>
      <section className='card-list'>
        {data.map((loc, index) => {
          const {
            address,
            state_name,
            district_name,
            pincode,
            fee_type,
            date,
            available_capacity,
            vaccine,
            min_age_limit,
            slots,
          } = loc
          return (
            <article key={index} className='card'>
              <header className='card-header'>
                <p>{date}</p>
                <h2>
                  {address}, {district_name}, {state_name}, {pincode}
                </h2>
                <h1>Fee: {fee_type}</h1>
                <p>Capacity: {available_capacity}</p>
                <p>Vaccine: {vaccine}</p>
                <p>Minimum Age: {min_age_limit}</p>
              </header>
              <div className='tags'>
                {slots.map((slot) => {
                  return (
                    <h1 href='#' key={slot}>
                      {slot}
                    </h1>
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>
      <div className='card-form-inner'>
        <div className='form-footer'>
          <a onClick={reset}>
            Check Another<span className='fa fa-thumbs-o-up'></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
