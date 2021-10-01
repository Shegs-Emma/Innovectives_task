import styled from "styled-components";

const LandingContainer = styled.div`
    width: 100%;
    height: 1080px;
    background-color: #F4F7FA;
    opacity: 1;
    display: flex;
`;

const DashNav = styled.div`
    display: none;

    @media (min-width: 52em) {
        display: block;
        width: 22%;
    }
`;

const DashB = styled.div`
    width: 100%;

    @media (min-width: 52em) {
        display: block;
        width: 78%;
    }
`;

export {
    LandingContainer,
    DashNav,
    DashB
};