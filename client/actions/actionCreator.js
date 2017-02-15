// increment products
export function increment(index) {
  return {
    type: 'INCREMENT_QNT',
    index
  }
}
// add info
export function addInfo(productId, author, info) {
  return {
    type: 'ADD_INFO',
    productId,
    author,
    info
  }
}
// remove info
export function removeInfo(productId, index, author) {
  return {
    type: 'REMOVE_INFO',
    productId,
    index,
    author
  }
}
