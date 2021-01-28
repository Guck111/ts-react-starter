import "./lang/i18n"
import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { attachLogger } from "effector-logger/attach"
import { root } from "effector-root"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "@redux/store"

attachLogger(root, {
  console: "disabled",
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
