import { useGlobusContext } from '@openglobus/openglobus-react'
import './styles.css'
import { LonLat } from "@openglobus/og";

interface FlyToButtonProps {
    lat: string | undefined,
    lon: string | undefined
}

export default function FlyToButton({ lat, lon }: FlyToButtonProps) {
    const { globus } = useGlobusContext()

    const clickFlyTo = () => {
        let ell = globus?.planet.ellipsoid;

        let destPos = new LonLat(Number(lon), Number(lat), 5000);
        let viewPoi = new LonLat(Number(lon), Number(lat), 0);
        
        if (ell) {
            let lookCart = ell.lonLatToCartesian(viewPoi);
            let upVec = ell.lonLatToCartesian(destPos).normalize();
            // 0 - is an amplitude of the fly track
            globus?.planet.camera.flyLonLat(destPos, lookCart, upVec, 50);
        }
    }

    return (
        <button id={"fly-to-btn"} onClick={clickFlyTo}>Voar para destino</button>
    )
}