import './Product-card.styles.scss'
import CustomButton from '../custom-button/custom-button.component';

 const ProductCard = ({key,name,price,imageUrl}) => {
    return (
        <div className='collection-item' key={key}>
            <img className='image'src={imageUrl} alt={name}/>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType="inverted">Add to card</CustomButton>
        </div>
    )
}
export default ProductCard
