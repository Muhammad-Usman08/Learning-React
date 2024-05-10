import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../component/Card';

const Product = () => {
    //params for dynamic route
    const params = useParams();
    console.log(params);

    //states
    const [data, setData] = useState([]);


    //useEffect
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })

    }, [])



    return (

        <div className='flex justify-evenly flex-wrap gap-5 mt-[5rem]'>

            {data.length > 0 ? data.map((item) => {
                return <Card key={item.id} title={item.title} price={item.price} description={item.description} src={item.image} id={item.id} />

            }) : <h1>Loading...</h1>}

        </div>


    )
}

export default Product