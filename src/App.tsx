import '@openglobus/openglobus-react/dist/style.css'
import { GlobusContextProvider } from '@openglobus/openglobus-react'
import "./App.css";
import Map from './components/Map';
import Menu from './components/Menu';

function App() {
    return (
        <GlobusContextProvider>
            <div className={"app-container"}>
                <div id={"menus-wrapper"}>
                    <Menu />
                </div>

                <div id={"map-wrapper"}>
                    <Map />
                </div>
            </div>
        </GlobusContextProvider>
    )
}

export default App
