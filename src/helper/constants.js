export const ROUTE = {
    HOME:"/",
    CATEGORY:"/products/:id",
    MENS:"/products/mens",
    WOMENS:"/products/womens",
    KIDS: "/products/kids",
    SALE: "/products/sale",
    ITEM_PAGE: "/product/:id",
    CART: "/cart", 
    WISHLIST: "/wishlist",
    SHIPPING_ADDRESS: "/checkout/shipping_address",
    PAYMENT: "/checkout/order_payment",
    ORDER_PLACED: "/order_placed"
}

export const USER_CART_STORAGE_KEY = "userCart";
export const USER_ORDERS_STORAGE_KEY = "userPastOrder";
export const USER_ADDRESSES_STORAGE_KEY = "userAddresses";
export const USER_WISH_LIST_STORAGE_KEY = "userWishList";
export const AUTH_USER = "authUser";