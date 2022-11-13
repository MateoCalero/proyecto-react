import Item from "./Item"

const ItemList = ({ items })=> {
    return(
        <>
        {
          items.map(item => (
            <Item
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            description={item.description}
            price={item.price}
            stock={item.stock} />
          ))
        }
        </>
    )
}

export default ItemList