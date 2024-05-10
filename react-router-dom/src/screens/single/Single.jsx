import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../component/Card';
import axios from 'axios';

const Single = () => {

  //useParams
  const params = useParams();


  //states
  const [data, setData] = useState([]);

  //useEffect
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res);
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })

  }, [])

  return (
    <>
      <div className='flex justify-center mt-10'>
        {data ? <Card src={data.image} description={data.description} title={data.title}
          showBtn={false}
        /> : <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default Single