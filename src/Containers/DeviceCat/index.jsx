import React from "react";
import { 
    LandingContainer,
    DashNav,
    DashB
} from "../Landing/Layout.styles";
import Dashnav from "../../Components/dashnav";
import DeviceCategory from "../../Components/deviceCat";


const DeviceCat = () => {
    return (
        <LandingContainer>
            <DashNav>
                <Dashnav />
            </DashNav>
            <DashB>
                {/* <Dashboard /> */}
                <DeviceCategory />
            </DashB>
        </LandingContainer>
    )
}

export default DeviceCat;