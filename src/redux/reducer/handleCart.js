const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Item is already in cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // If item is already in cart then increase quantity by 1
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // If item is not in cart then add item to cart
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      // Check if Item is already in cart
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        // If item is already in cart then increase quantity by 1
        return state.filter((x) => x.id !== exist1.id);
      } else {
        // If item is not in cart then add item to cart
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      break;
  }
};

export default handleCart;