import { Users } from "./Users"

export default {
  title: "Tag title",
  component: Users,
}
export const Basic = () => <Users title="first" />
export const Second = () => <Users title="second" />
