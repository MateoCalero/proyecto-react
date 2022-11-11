import { useState } from "react"

const ItemCount = ({stock, initial, onAdd})=>{
    const [count,setCount]=useState(initial)
    const decrease=()=>{
        setCount(count - 1);
    }
    const increase=()=>{
        setCount(count + 1);
    }
    
    return(
                <div>
                    <span className="contador">{count}</span>
                    <button disabled={count >= stock} className="btn btn-outline-dark aumentar" onClick={increase}>+</button>
                    <button disabled={count <= 1} className="btn btn-outline-dark disminuir" onClick={decrease}>-</button>
                    <div>
                        <button className="btn btn-dark btn-lg btn-addToCart" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                    </div>
                </div>
    )
}
export default ItemCount