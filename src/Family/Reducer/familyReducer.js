const initialState = {
  value: "Vignesh Nagarajan"
}

export default function familyReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD':
        return Object.assign({}, state, {
          value: action.value
        })
      default:
        return state
    }
  }