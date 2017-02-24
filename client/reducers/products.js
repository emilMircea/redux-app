// reducer takes in action + copy of currentState(store). returns updatedStore
function products(state = [], action){
  switch (action.type) {
    case 'INCREMENT_QNT':
    const i = action.index
    // return the updated state
      return [
        ...state.slice(0, i), // portion before the one updating
        {...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // portion after the one updating
      ]
    default:
      return state

  }
}

export default products;
