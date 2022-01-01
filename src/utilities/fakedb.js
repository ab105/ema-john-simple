// use local storage as your db for now

// addToDb bolle product er id ke patiye dibe and shei onujayi product ke add kore  local storage er modde
const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {
    //remove er shomoy product ta na thakle aitake kisu korbo na and product ta thakle else er kaj korbe 
  }
  else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

//below er way use kore shopping cart ke ekebare clear kore dite pari
const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
