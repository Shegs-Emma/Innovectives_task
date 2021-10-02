import React from "react";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import {
    DeviceCategoryCon,
    DeviceBody,
    Categories,
    SpanCate,
} from "../deviceCat/deviceCat.styles";
import { H2 } from "../typography";
import {
    MobileLoan,
    PurchaseButtons
} from "./purchaseItem.styles";
import Navbar from "../navbar";
import { Span } from "../typography";
import Button from "../dashboard/button";

const PurchaseItem = () => {

    const history = useHistory();

    const routeChange = () =>{
        let path = `cat`; 
        history.push(path);
    };

    return (
        <DeviceCategoryCon>
            <Navbar />

            <DeviceBody>
                <Categories>
                    <SpanCate>
                        <Span noa>Loans</Span>
                        <Span noa>
                            <Span slash>/</Span>
                            Device Loans
                        </Span>
                        <Span noa>
                            <Span slash>/</Span>
                            Device Categories
                        </Span>
                        <Span acti>
                            <Span slash>/</Span>
                            <Span sped>Mobile Device Loan</Span>
                        </Span>
                    </SpanCate>
                </Categories>
                <Button dev clicked={routeChange}> <FiChevronLeft className="back" size="1rem" /> Go Back </Button>

                <MobileLoan>
                    <H2 selD>Mobile Device Loan - Samsung Galaxy Note 9</H2>
                    <Span selD>Render here the form of CowriesMFB for the loan</Span>
                    <PurchaseButtons>
                        <Button sub>Submit</Button>
                        <Button bac>Back</Button>
                    </PurchaseButtons>
                </MobileLoan>

            </DeviceBody>
        </DeviceCategoryCon>
    )
};

export default PurchaseItem;