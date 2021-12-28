import {
  USER_CREATE,
  USER_REMOVE,
  USER_UPDATE,
} from '../Constants/userConstants'

export const CreateUser = (user) => {
  //
  return { type: USER_CREATE, payload: user }
}

export const RemoveUser = (id) => {
  //
  return { type: USER_REMOVE, payload: id }
}

export const UpdateUser = (user) => {
  //
  return { type: USER_UPDATE, payload: user }
}
