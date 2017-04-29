const initialState = {
  year: 2016,
  photos: []
}

export default function page(state = initialState, action) {
   switch (action.type) {
    case 'SET_YEAR':
      return { ...state, year: action.payload }

    default:
      return state;
  }
}
export function setYear(year) {
  return  {
     type: 'SET_YEAR',
      payload: year
    }
}