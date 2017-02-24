// increment products
export function increment(index) {
  return {
    // this is the name of the action
    type: 'INCREMENT_QNT',
    // identifier for the post that gets updated
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
