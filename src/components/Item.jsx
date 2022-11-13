import { Link } from "react-router-dom"



const Item = ({img, name, id, price, stock}) => {
  

  

    return (
      
        <div className="producto-container">
          <div className="producto-image">
            <img src={img} alt="Same alt value" />
          </div>
          <div className="producto-info">
            <h3 className='producto-title'>{name}</h3>
            
            <p className='producto-price'>Precio: ${price}</p>
            <p className='producto-stock'>Stock: {stock}</p>
            <button className='btn btn-success btn-comprar '>Comprar</button>
            <button className="btn btn-dark producto-description"><Link to={`/item/${id}`}>Detalle</Link></button>
          </div>
        </div>
      
    )
  }
  
  export default Item