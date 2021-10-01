import React from "react";
import { 
    LandingContainer,
    DashNav,
    DashB
} from "./Layout.styles";
import Dashnav from "../../Components/dashnav";
import Dashboard from "../../Components/dashboard";


const Landing = () => {
    return (
        <LandingContainer>
            <DashNav>
                <Dashnav landing />
            </DashNav>
            <DashB>
                <Dashboard />
            </DashB>
        </LandingContainer>
    )
}

export default Landing;