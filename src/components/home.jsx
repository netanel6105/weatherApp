import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Footer from './footer'

const Home = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const inputRef = useRef()
  const nav = useNavigate()
  const [query] = useSearchParams()


  const doApi = async () => {

    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query.get('city') || "paris"}&appid=a2d581b7fe2328a3df77563f53ea4a62&units=metric`
    const { data } = await axios(url);

    const obj = {
      location: {
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      },
      weather: {
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        desc: data.weather[0].description
      },
      coord: {
        lon: data.coord.lon,
        lat: data.coord.lat
      }

    }
    console.log(obj);
    setData(obj)

    setLoading(false)
  }


  useEffect(() => {
    console.log(query.get('city'));
    doApi();
  }, [query])



  return (
    <div>
      <div className="bg-dark container-fluid">
        <div className="container text-center mb-5 " >
          <h3 className='top'>Weather Forecast</h3>

        </div>
        </div>
        <div className='d-flex flex-column align-items-center py-5'>
        <div className='d-flex'>
          <input ref={inputRef} className='form-control' type="text" />

          <button onClick={() => { nav('?city=' + inputRef.current.value); }} className='mx-2 btn btn-primary'>Search</button>
        </div>

        {loading ? <h1>Loading...</h1> :
          <div>
            <h1>City:{data.location.city}</h1>
          <h2>Temp:{data.weather.temp}</h2>
            {data.weather.temp < 19 ? <img src={'image.png'} width={50}/> : <img src={'image.png'} width={50}/> }
            <h2>Desc:{data.weather.desc}</h2>

          </div>}

      </div>
      <Footer/>
    </div>
  )
}

export default Home