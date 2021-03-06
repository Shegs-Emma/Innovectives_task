import styled from "styled-components";

const SidenavCont = styled.div`
    position: fixed;
    width: 600px;
    max-width: 80%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: rgb(33, 31, 59);
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    transform: ${({ open }) => (open ? "transform: translateX(0)" : "translateX(-100%)")};

    @media (min-width: 52em) {
        display: none;
    }
`;



export {
    SidenavCont
}