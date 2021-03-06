
const actions = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ITEM: 'REMOVE_ITEM',
    ADD_QUANTITY: 'ADD_QUANTITY',
    SUB_QUANTITY: 'SUB_QUANTITY',
    PRODUCT_LIST: 'PRODUCT_LIST',
    OPEN_SIZE_GUIDE: 'OPEN_SIZE_GUIDE',
    OPEN_MEASURING_GUIDE: 'OPEN_MEASURING_GUIDE',
    ADD_TO_CART_TASK: 'ADD_TO_CART_TASK',
    OPEN_GIFT_BOX: 'OPEN_GIFT_BOX',
    ADD_TO_WISHLIST_TASK_NEw: 'ADD_TO_WISHLIST_TASK_NEw',
    ACCOUNT_SECTION: 'ACCOUNT_SECTION',
    MINICART_SECTION: 'MINICART_SECTION',
    PAYMENT_METHODS: 'PAYMENT_METHODS',
    SHIPPING_ADDRESS: 'SHIPPING_ADDRESS',
    BILLING_ADDRESS: 'BILLING_ADDRESS',
    RECOMENDED_PRODUCTS: 'RECOMENDED_PRODUCTS',
    GET_ATTRIBUTES_PRODUCTS: 'GET_ATTRIBUTES_PRODUCTS',
    CHECKOUT_SIDEBAR: 'CHECKOUT_SIDEBAR',
    GET_CATEGORY_DATA: 'GET_CATEGORY_DATA',
    SET_LOADER_PRODUCTS: 'SET_LOADER_PRODUCTS',
    SET_SORTING_PRODUCTS: 'SET_SORTING_PRODUCTS',
    SET_PAGESIZE: 'SET_PAGESIZE',
    SET_CATAEARCH: 'SET_CATAEARCH',
    SET_CATANAME: 'SET_CATANAME',
    OPEN_PREP_BOX: 'OPEN_PREP_BOX',
    addToCart: (id: number) => ({
        type: actions.ADD_TO_CART,
        id
    }),
    addToCartTask: addToCartTask => ({
        type: actions.ADD_TO_CART_TASK,
        addToCartTask
    }),
    addToWishlistTask: isShow => ({
        type: actions.ADD_TO_WISHLIST_TASK_NEw,
        isShow: isShow
    }),
    removeItem: (id: number) => ({
        type: actions.REMOVE_ITEM,
        id
    }),
    addQuantity: (id: number) => ({
        type: actions.ADD_QUANTITY,
        id
    }),
    subtractQuantity: (id: number) => ({
        type: actions.SUB_QUANTITY,
        id
    }),
    productList: payload => ({
        type: actions.PRODUCT_LIST,
        payload
    }),
    openSizeGuide: isOpen => ({
        type: actions.OPEN_SIZE_GUIDE,
        isOpen: isOpen
    }),
    openMeasuringGuide: isOpen => ({
        type: actions.OPEN_MEASURING_GUIDE,
        isOpen: isOpen
    }),
    openGiftBoxes: isOpen => ({
        type: actions.OPEN_GIFT_BOX,
        isOpen: isOpen
    }),
    accountPopup: isShow => ({
        type: actions.ACCOUNT_SECTION,
        isShow: isShow
    }),
    miniCartPopup: isShow => ({
        type: actions.MINICART_SECTION,
        isShow: isShow
    }),
    showPaymentMethods: payload => ({
        type: actions.PAYMENT_METHODS,
        payload
    }),
    shippingAddressState: payload => ({
        type: actions.SHIPPING_ADDRESS,
        payload
    }),
    billingAddressState: payload => ({
        type: actions.BILLING_ADDRESS,
        payload
    }),
    recomendedProducts: payload => ({
        type: actions.RECOMENDED_PRODUCTS,
        payload
    }),
    getAttributeProducts: payload => ({
        type: actions.GET_ATTRIBUTES_PRODUCTS,
        payload
    }),
    getCheckoutSideBar: payload => ({
        type: actions.CHECKOUT_SIDEBAR,
        payload
    }),
    getCategoryData: payload => ({
        type: actions.GET_CATEGORY_DATA,
        payload
    }),
    loaderProducts: loading => ({
        type: actions.SET_LOADER_PRODUCTS,
        loading
    }),
    sortingFilterProducts: payload => ({
        type: actions.SET_SORTING_PRODUCTS,
        payload
    }),
    setPageFilter: payload => ({
        type: actions.SET_PAGESIZE,
        payload
    }),
    setCatSearch: catId => ({
        type: actions.SET_CATAEARCH,
        catId
    }),
    setCurrentCat: catname => ({
        type: actions.SET_CATANAME,
        catname
    }),
    closePrefPopup: isOpen => ({
        type: actions.OPEN_PREP_BOX,
        isOpen: isOpen
    }),
};
export default actions;
