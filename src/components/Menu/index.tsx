import { useState } from "react";
import FlyToButton from "../FlyToButton";
import "./styles.css";

export default function Menu() {

    const [ lat, setLat ] = useState<string | undefined>(undefined)
    const [ lon, setLon ] = useState<string | undefined>(undefined)

    const autoFillLatLon = () => {
        setLat("-22.951916")
        setLon("-43.2104872")
    }

    const [ isAddMarkerOnClickEnabled, setIsAddMarkerOnClickEnabled ] = useState(false)

    return(
        <div className={"menu-container"}>
            <div className={"inner-container"}>
                <div className={"fly-to-container"}>
                    <h2>Navegação</h2>
                    <label className={"fly-to-coords-label"}>Latitude</label>
                    <input className={"fly-to-coords-input"} placeholder="Exemplo: -22.951916" value={lat} onChange={e => setLat(e.target.value)} />
                    <label className={"fly-to-coords-label"}>Longitude</label>
                    <input className={"fly-to-coords-input"} placeholder="Exemplo: -43.2104872" value={lon} onChange={e => setLon(e.target.value)} />
                    <FlyToButton lat={lat} lon={lon} />
                    <button id={"temporary-btn"} onClick={autoFillLatLon}>Preencher automaticamente</button>
                </div>

                <div className={"manage-markers-container"}>
                    <h2>Marcadores</h2>
                    {!isAddMarkerOnClickEnabled &&
                    <button onClick={() => setIsAddMarkerOnClickEnabled(value => !value)} className={"markers-button"}>Enable add marker on click</button>}

                    {isAddMarkerOnClickEnabled &&
                    <button onClick={() => setIsAddMarkerOnClickEnabled(value => !value)} className={"markers-button"}>Disable add marker on click</button>}
                </div>
            </div>
        </div>
    )
}