import React from "react"



function Product(props)
{
    return (
        <div>
            <h4>Price: {props.price}</h4>
            <h4>Name: {props.name}</h4>
            <h4>Desc: {props.desc}</h4>
        </div>
    )



}



export default Product
