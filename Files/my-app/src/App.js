import React from "react"
import prods from './products'
import Product from './components/Product'

function App()
{
    const prodComponents = prods.map(prod =>
        <Product key={prod.id} name ={prod.name} price={prod.price} desc={prod.desc}/>)
        
        return( 
        <div>
            {prodComponents}
        </div>
        )

}


export default App