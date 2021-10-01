import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import {
    DeviceCategoryCon,
    DeviceBody,
    Categories,
    SpanCate,
    DeviceSelect,
    Devices,
    Device,
    Triangle
} from "./deviceCat.styles";
import Navbar from "../navbar";
import Tabler from "./table";
import { Span } from "../typography";
import Button from "../dashboard/button";
import { H2 } from "../typography";

const DeviceCategory = () => {
    const [isShowing, setIsShowing] = useState(false);

    const history = useHistory();

    const routeChange = () =>{ 
        console.log("i was clicked");
        let path = `/`; 
        history.push(path);
    };

    const handleShowing = () => {
        setIsShowing(!isShowing);
    }

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
                        <Span acti>
                            <Span slash>/</Span>
                            <Span sped>Device Categories</Span>
                        </Span>
                    </SpanCate>
                </Categories>
                <Button dev clicked={routeChange}> <FiChevronLeft className="back" size="1.2rem" /> Go Back </Button>

                <DeviceSelect>
                    <H2 sel>Select Device Category</H2>
                    <Devices>
                        <Device 
                            onClick={() => handleShowing()}
                        >
                            <img src="/Mobile.svg" alt="device" className={isShowing ? "devicesSelected" : "devices"} />
                            <Span>Mobile Device</Span>
                        </Device>
                        
                        {isShowing && <Triangle />}

                        <Device>
                            <img src="/Accessories.svg" alt="device" className="devices" />
                            <Span>Mobile Device Accessories</Span>
                        </Device>

                        <Device>
                            <img src="/Appliances.svg" alt="device" className="devices" />
                            <Span>Tablets and Laptops </Span>
                        </Device>

                        <Device>
                            <img src="/Appliances.svg" alt="device" className="devices" />
                            <Span>Home Appliances</Span>
                        </Device>

                        <Device>
                            <img src="/Gaming.svg" alt="device" className="devices" />
                            <Span>Gaming Consoles</Span>
                        </Device>
                    </Devices>
                </DeviceSelect>
                
                
                {isShowing && (
                    <Tabler />
                )}
            </DeviceBody>
        </DeviceCategoryCon>
    )
};

export default DeviceCategory;