/// <reference types="react-scripts" />

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.svg?inline" {
  import { HTMLAttributes } from "react"
  const output: React.ComponentType<HTMLAttributes<SVGElement>>
  export default output
}