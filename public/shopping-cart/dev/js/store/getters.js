
//products相关getters
export const allProducts = state => state.products.all;

//cart相关getters
export const checkoutStatus = state => state.cart.checkoutStatus;

export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}

export const productsDecCart = (state) => state.products.allDecCart;

