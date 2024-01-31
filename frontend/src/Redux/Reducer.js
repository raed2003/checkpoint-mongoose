import { GETUSERS } from "./Actiontype"

const initialState = {
    users: []
}

export  const userReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSERS:
    return { ...state,users:payload.allusers }

  default:
    return state
  }
}
