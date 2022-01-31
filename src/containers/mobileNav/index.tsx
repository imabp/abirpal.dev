import { Dispatch, SetStateAction } from "react";
import NavButton from "../../components/mobile/navbutton";
interface MobileNavContainer {
    overlay: boolean;
    setOverlay: Dispatch<SetStateAction<boolean>>

}
const MobileNavContainer = ({overlay, setOverlay}:MobileNavContainer) => {

    return <div
        id="mobileMenu"
        className="
    iphones:rounded-md
    iphones:block iphones:fixed iphones:bottom-2 iphones:right-2
    iphonex:rounded-md iphonex:block iphonex:fixed iphonex:bottom-2 iphonex:right-2
    desktop:hidden
    
    "
    >
        <NavButton overlay={overlay} setOverlay={setOverlay} />
    </div>

}
export default MobileNavContainer;