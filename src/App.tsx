import '@openglobus/openglobus-react/dist/style.css'
import Globus, {GlobusContextProvider} from '@openglobus/openglobus-react'
import ButtonContainer from "./ButtonContainer.tsx";


function App() {
    return <GlobusContextProvider>
        <Globus/>
        <ButtonContainer/>
    </GlobusContextProvider>
}

export default App
