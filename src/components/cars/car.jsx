import React from 'react'

const Car = ({car}) => {
    // const car = props.car;
    // console.log(props);
  return (
    
    <div className='row border shadow p-2 h-100'>

        <div className='col-12 col-md-6'>
        {/* <p>{number}</p> */}
            <img width={'100%'} src={car.img_url} alt={car.model} />
        </div>
        <div className='col-12 col-md-6 '>
            <h5 className='p-0 m-0'>{car.model}</h5>
            <h6>{car.company}</h6>
            <p className='p-0 m-0'>price: {car.price}$</p>
            <p className='p-0 m-0'>Year: {car.year}$</p>
        </div>

    </div>

  )
}

export default Car