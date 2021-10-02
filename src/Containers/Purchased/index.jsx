import React from "react";
import { 
    LandingContainer,
    DashNav,
    DashB
} from "../Landing/Layout.styles";
import Dashnav from "../../Components/navigation/dashnav";
import PurchaseItem from "../../Components/purchaseItem";

const Purchased = () => {
    return (
        <LandingContainer>
            <DashNav>
                <Dashnav />
            </DashNav>
            <DashB>
                <PurchaseItem />
            </DashB>
        </LandingContainer>
    )
}

export default Purchased;