import { createSelector } from "reselect"
import memoize from 'lodash.memoize';

const selectShop = state => state.shop 

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections 
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])  
)

// without memoize
// export const selectCollection = collectionUrlParam => createSelector(
//     [selectCollections],
//     collections => collections.filter(collection => collection.id == COLLECTION_ID_MAP[collectionUrlParam])
// )

// with memoize
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
