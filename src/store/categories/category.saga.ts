import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.action";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCollectionAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}
export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
