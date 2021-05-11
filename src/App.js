import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import moment from 'moment'
import Card from './UI/Card/Card'

function App() {
  const [pincode, setPincode] = useState('')
  const [dt, setDt] = useState(new Date(moment(new Date())._i))
  const [data, setData] = useState([])

  const formSubmitted = () => {
    const date = moment(dt).format('DD-MM-YYYY')
    const zip = pincode
    let config = {
      method: 'get',
      url:
        'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' +
        zip +
        '&date=' +
        date,
      headers: {
        accept: 'application/json',
      },
    }

    axios(config)
      .then((slots) => {
        if (slots.data.sessions.length === 0) {
          alert('Unable To Find Vaccine Centers For This Location')
          setData([])
        } else {
          let data = slots.data.sessions
          setData(data)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const settingDate = (e) => {
    const x = moment(e.target.value)._i
    setDt(x)
  }

  const reset = ()=>{
    setData([])
    setPincode('')
    setDt(new Date(moment(new Date())._i))
  }

  return (
    <>
      {data.length ? (
        <Card data={data} reset={reset} />
      ) : (
        <div className='card-form'>
          <form className='signup'>
            <div className='form-title'>Check For Vaccine Availaiblity</div>
            <div className='form-body'>
              <div className='row'>
                <input
                  type='number'
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder='Pincode*'
                />
                <input
                  id='dt'
                  type='date'
                  value={dt}
                  onChange={(e) => settingDate(e)}
                  placeholder='Date*'
                />
              </div>
              <div className='row'></div>
            </div>
            <div className='rule'></div>
            <div className='form-footer'>
              {
                // eslint-disable-next-line
              }
              <a onClick={formSubmitted}>
                Check Now<span className='fa fa-thumbs-o-up'></span>
              </a>
            </div>
          </form>
        </div>
      )}
       <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          style={{ color: '#eee' }}
          href='https://github.com/Sr-Preet/Vaccine-Center-Checker'
        >
          Coding By Sarpreet
        </a>
      </div>
    </>
  )
}

export default App
