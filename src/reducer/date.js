import { SET_DATE_FILTER } from '../constants'

const initialState = {
  from: null,
  to: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATE_FILTER:
      return {
        ...state,
        ...payload
      }
  }

  return state
}
