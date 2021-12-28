import {
  USER_CREATE,
  USER_REMOVE,
  USER_UPDATE,
} from '../Constants/userConstants'

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER_CREATE:
      const user = action.payload
      return [...state, user]
    case USER_REMOVE:
      const id = action.payload
      return state.filter((e) => {
        return e.id !== id
      })

    case USER_UPDATE:
      const userUp = action.payload
      const updatedUsers = state.map((usr) => {
        if (usr.id === userUp.id) {
          return userUp
        } else {
          return usr
        }
      })
      return updatedUsers
    default:
      return state
  }
}
