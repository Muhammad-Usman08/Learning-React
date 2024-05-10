import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ src, title, price, description, id, showBtn = true }) => {
    const navigate = useNavigate();
    function single() {
        navigate(`/single/${id}`);
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[150px] py-10' src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{id}</p>
                <div className="card-actions justify-end">
                    {showBtn ? <button onClick={single} className="btn btn-primary">Shop Now</button> : null}
                </div>
            </div>
        </div>

    )
}

export default Card