import "./assets/reset.css"
import "./lang/i18n"
import "tailwindcss/dist/base.min.css"
import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { attachLogger } from "effector-logger/attach"
import { root } from "effector-root"

attachLogger(root, {
  console: "enabled",
})

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)
