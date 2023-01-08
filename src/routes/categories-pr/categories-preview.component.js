import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {  Fragment } from 'react';
import { selectCategoriesMap } from './../../store/categories/category.selector'
import { useSelector } from 'react-redux';
 const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title)=>
            (<CollectionPreview key={title} title={title}items={categoriesMap[title]}/>))}
        </Fragment>
    )
}
export default CategoriesPreview 