import styled from "styled-components";

const SidenavCont = styled.div`
    position: fixed;
    width: 500px;
    max-width: 60%;
    height: 90%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: rgb(33, 31, 59);
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 52em) {
        display: none;
    }
`;



export {
    SidenavCont
}