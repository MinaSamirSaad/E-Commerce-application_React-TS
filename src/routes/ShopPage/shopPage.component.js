// import { useState } from 'react'
// import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { useContext } from 'react';
import { ProductsContext } from './../../contexts/products.context';

 const ShopPage = () => {
    //  const [shopData,setshopData]=useState(SHOP_DATA)
const {products} = useContext(ProductsContext)

    return (
        <div className="shop page">
            {products.map(({id,...otherCollectionProps})=>
            (<CollectionPreview key={id} {...otherCollectionProps}/>))}
        </div>
    )
}
export default ShopPage 