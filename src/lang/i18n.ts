import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ru from "./ru.json"
import en from "./en.json"

export const langs = ["ru", "en"]

const resources = {
  ru: {
    translation: ru,
  },
  kz: {
    translation: en,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || langs[0],
  interpolation: {
    escapeValue: false,
  },
})

export const t = (key: string, options?: { [key: string]: string }) => i18n.t(key, options)
/*eslint-disable */
export default i18n
/*eslint-enable */
