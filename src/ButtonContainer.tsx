import {useGlobusContext} from '@openglobus/openglobus-react'
import './ButtonContainer.css'
import {LonLat} from "@openglobus/og";


export default function ButtonContainer() {
    const {globus} = useGlobusContext()
    const clickFlyTo = () => {
        let ell = globus?.planet.ellipsoid;

        let destPos = new LonLat(10.13176, 46.18868, 10779);
        let viewPoi = new LonLat(9.98464, 46.06157, 3039);
        if (ell) {
            let lookCart = ell.lonLatToCartesian(viewPoi);
            let upVec = ell.lonLatToCartesian(destPos).normalize();
            // 0 - is an amplitude of the fly track
            globus?.planet.camera.flyLonLat(destPos, lookCart, upVec, 0);
        }
    }

    return <div className={'button-container'}>
        <button onClick={clickFlyTo}>Fly to</button>
    </div>
}