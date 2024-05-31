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

    return(
        <div className={"menu-container"}>
            <div className={"inner-container"}>
                <input className={"fly-to-coords-input"} placeholder="Latitude" value={lat} onChange={e => setLat(e.target.value)} />
                <input className={"fly-to-coords-input"} placeholder="Longitude" value={lon} onChange={e => setLon(e.target.value)} />
                <button id={"temporary-btn"} onClick={autoFillLatLon}>Preencher automaticamente</button>
                <FlyToButton lat={lat} lon={lon} />
            </div>
        </div>
    )
}