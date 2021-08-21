import { User } from "./init"

export const addUser = (store: User[], name: string) => [...store, { name, id: store.length }]
