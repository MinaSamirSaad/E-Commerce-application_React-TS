import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
 const CategoriesPreview = () => {
    //  const [shopData,setshopData]=useState(SHOP_DATA)
const {categoriesMap} = useContext(CategoriesContext)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title)=>
            (<CollectionPreview key={title} title={title}items={categoriesMap[title]}/>))}
        </Fragment>
    )
}
export default CategoriesPreview 