import './collection-item.styles.scss'

 const CollectionItem = ({key,name,price,imageUrl}) => {
    return (
        <div className='collection-item' key={key}>
            <div className='image'style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}
export default CollectionItem
