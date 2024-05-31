import '@openglobus/openglobus-react/dist/style.css'
import Globus from '@openglobus/openglobus-react'
import "./styles.css";

function Map() {
    return (
        <div className={"map-container"}>
            <Globus/>
        </div>
    )
}

export default Map
