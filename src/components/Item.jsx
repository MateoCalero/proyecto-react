


const Item = ({img, name, description, price, stock}) => {
  

  

    return (
      <div className="producto-container">
          <div className="producto-image">
          <img src={img} alt="Same alt value" />
          </div>
          <div className="producto-info">
          <h3 className='producto-title'>{name}</h3>
          <p>{description}</p>
          <p className='producto-price'>Precio: ${price}</p>
          <p className='producto-stock'>Stock: {stock}</p>
          <button className='btn-comprar'>Comprar</button>
          </div>
      </div>
    )
  }
  
  export default Item