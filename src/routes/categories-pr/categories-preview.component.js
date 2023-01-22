import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { Fragment } from "react";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "./../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CollectionPreview
            key={title}
            title={title}
            items={categoriesMap[title]}
          />
        ))
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
