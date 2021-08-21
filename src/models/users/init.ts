import { createEvent, createStore } from "effector"
import { addUser } from "./handlers"

export type User = {
  name: string
  id: number
}

const defaultStore: User[] = []
export const $users = createStore(defaultStore)

export const addUserFx = createEvent<string>()

$users.on(addUserFx, addUser)
