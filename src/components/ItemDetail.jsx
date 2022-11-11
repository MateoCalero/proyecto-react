import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
    const onAdd= (quantity) =>{
        alert(`Has comprado ${quantity} unidades`)
    }

    return(
        <div className="itemDetail-container">
            <div className="itemDetail-img"><img src={item.img} alt="" /></div>
            <div className="detailContainer">
                <h3 className="itemDetail-name">{item.name}</h3>
                <p className="itemDetail-text">{item.description}</p>
                <p className="itemDetail-price">${item.price}</p>
                <p className="itemDetail-stock">Stock: {item.stock}</p>

                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            </div>

        </div>
    )
    
}

export default ItemDetail