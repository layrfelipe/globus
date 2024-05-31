import { useGlobusContext } from '@openglobus/openglobus-react'
import './styles.css'
import { LonLat } from "@openglobus/og";

export default function FlyToButton() {
    const { globus } = useGlobusContext()

    const clickFlyTo = () => {
        let ell = globus?.planet.ellipsoid;

        let destPos = new LonLat(-43.2104872, -22.951916, 5000);
        let viewPoi = new LonLat(-43.2104872, -22.951916, 0);
        if (ell) {
            let lookCart = ell.lonLatToCartesian(viewPoi);
            let upVec = ell.lonLatToCartesian(destPos).normalize();
            // 0 - is an amplitude of the fly track
            globus?.planet.camera.flyLonLat(destPos, lookCart, upVec, 50);
        }
    }

    return <div className={'button-container'}>
        <button onClick={clickFlyTo}>Voar para o Cristo Redentor</button>
    </div>
}