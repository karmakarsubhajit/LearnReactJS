import React from "react"



function Product(props)
{
    return (
        <div>
            <h4>Name: {props.product.name}</h4>
            <p>{props.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})} - {props.product.desc}</p>
        </div>
    )



}



export default Product
