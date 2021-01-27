const INITIAL_STATE = {
    sections: [
        { id: 1, title: "hats", linkUrl: 'shop/hats', imageUrl: "https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg" },
        { id: 2, title: "jackets", linkUrl: 'shop/jackets', imageUrl: "https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg" },
        { id: 3, title: "sneakers", linkUrl: 'shop/sneakers', imageUrl: "https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg" },
        { id: 4, title: "mens", linkUrl: 'shop/mens', imageUrl: "https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg" },
        { id: 5, title: "women", linkUrl: 'shop/women', imageUrl: "https://d1ekp87k3th824.cloudfront.net/media/catalog/product/cache/24b85352f4d2f651c81fec087949b4a7/e/p/ep_microfiberbl_1.jpg" }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer