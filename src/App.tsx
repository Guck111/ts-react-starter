import { hot } from "react-hot-loader/root"
import { Users } from "components/Users"
import { withTranslation } from "react-i18next"

const AppComponent = () => <Users title="Hello mxney!" />
export const App = hot(withTranslation()(AppComponent))
