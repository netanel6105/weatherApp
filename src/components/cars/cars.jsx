import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Car from './car'
import { useRef } from 'react'



const Cars = (props) => {
    //1
    const [cars, setCars] = useState([]);

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("All");
    const selectRef = useRef()

    //3
    // קטגוריות 
    const getCategories = (_data) => {
        const cat = []
        cat.push("All");
        _data.forEach(item => {
            if (!cat.includes(item.category)) {
                cat.push(item.category);
            }
        });

        setCategories(cat)
        console.log(cat)
    }





    //2
    const doApi = async () => {
        try {
            let url = `https://project-yarin.herokuapp.com/cars?perPage=99`
            const { data } = await axios(url)
            console.log(data);
            setCars(data);
            getCategories(data);

           
           //4
            let carsFilterd = [...data]
            if (category != 'All' && selectRef.current.value) {

                carsFilterd = data.filter(item => item.category === category);

            } else {
                let carsFilterd = [...data]
            }

            setCars(carsFilterd)


        }
        catch (err) {
            console.log(err.response);
        }
    }
    console.log(category);




    //3
    useEffect(() => {
        doApi();

    }, [category])





    return (
        <div>
            <div style={{ background: "" }} className="container-fluid">
                <h1 className='disply-3 text-center' >cars</h1>

                <div className='container p-2 col-lg-4 col-10'>


                    <select onChange={() => {
                        setCategory(selectRef.current.value)
                    }} ref={selectRef} className='form-select'>

                        {categories?.map((item, i) => {
                            return (
                                <option key={i} value={item}>{item.toUpperCase()}</option>
                            )
                        })}
                    </select>
                </div>




                <div style={{ color: "blue" }} className='container' >

                    <div className="row">
                        {cars?.map((item, i) => {
                            return (
                                <Car key={i} car={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>





    )
}

export default Cars



