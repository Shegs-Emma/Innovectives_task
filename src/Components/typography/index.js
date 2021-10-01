import styled from "styled-components";

const H2 = styled.h2`
    font: normal normal 600 32px 'Nunito';
    letter-spacing: 0px;
    color: #0A194E;
    opacity: 1;
`;

const P = styled.p`
    font-family: 'Nunito', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-align: ${({ noF }) => ( noF ? "center" : "")};
    color: ${({ noF }) => ( noF ? "#707070" : "")};
`;

const H3 = styled.h3`
    text-align: left;
    font: normal normal 600 18px 'Nunito';
    font: ${({ fro }) => (fro ? "normal normal normal 14px 'Nunito'" : "")};
    letter-spacing: 0px;
    color: #0A194E;
    opacity: 1;
    margin-right: 0.5rem;
    margin-top: ${({ fro }) => (fro ? "-0.5rem" : "")};
`;

const Span = styled.span`
    letter-spacing: 0px;
    color: #0D1F5F;
    opacity: 1;
    font: normal normal bold 12px/16px 'Nunito', sans-serif;
    font: ${({ nav, navP, navPa }) => (nav || navP || navPa ? "normal normal 600 16px Nunito" : "")};
    margin-left: 0.5rem;
    margin: ${({ navP }) => (navP ? "auto 0.5rem auto 1.5rem" : "")};
    margin: ${({ navPa }) => (navPa ? "0.5rem auto" : "")};
    cursor: ${({ navPa }) => (navPa ? "pointer" : "")};
`;

export {
    P,
    Span,
    H3,
    H2,
}