import React, { useState } from "react";
import { FiPhoneCall, FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Span } from "../typography";
import {
    Nav,
    NavItems,
    Support,
    Profile,
    ProfileItems,
    NavContainer,
    Logo
} from "./navbar.styles";
import Sidenav from "../dashnav/sidenav";

const Navbar = () => {
    const [ isViewing, setIsViewing ] = useState({ display: "none" });
    const [ isClicked, setIsClicked ] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <Nav>
            <NavContainer>
                    <Logo onClick={() => handleClick()}>
                        <GiHamburgerMenu size="1.5em" className="burger" />
                    </Logo>
                    {isClicked && <Sidenav />}
                <NavItems>
                    
                    <Support>
                        <FiPhoneCall className="chev" />
                        <Span nav>Support</Span>
                    </Support>
                    <Profile 
                        onMouseEnter={() => {
                            setIsViewing({display: 'block'});
                        }}
                        onMouseLeave={() => {
                            setIsViewing({display: 'none'})
                        }}
                    >
                        <img src="/sample.png" alt="sample" className="sample" />
                        <Span navP>Ayomide</Span>
                        <FiChevronDown className="chev" />
                    </Profile>
                </NavItems>
            </NavContainer>

            { isViewing && isViewing.display === "block" && (
                <ProfileItems
                    onMouseEnter={() => {
                        setIsViewing({display: 'block'});
                    }}
                    onMouseLeave={() => {
                        setIsViewing({display: 'none'})
                    }}
                >
                    <Span navPa>Profile</Span>
                    <Span navPa>Logout</Span>
                </ProfileItems>
            )}
        </Nav>
    )
};

export default Navbar;