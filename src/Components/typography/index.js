import styled from "styled-components";

const H2 = styled.h2`
    font: normal normal 600 20px 'Nunito';
    letter-spacing: 0px;
    color: #0A194E;
    opacity: 1;
    font: ${({ sel }) => ( sel ? "normal normal 600 18px Nunito" : "")};
    font: ${({ selD }) => ( selD ? "normal normal 600 12px Nunito" : "")};
    padding-bottom: ${({ selD }) => ( selD ? "1rem" : "")};
    margin-bottom: ${({ selD }) => ( selD ? "1rem" : "")};
    width: ${({ selD }) => ( selD ? "96%" : "")};
    border-bottom: ${({ selD }) => ( selD ? "0.7px solid #DDDDDD" : "")};

    @media (min-width: 52em) {
        font: normal normal 600 32px 'Nunito';
        font: ${({ sel }) => ( sel ? "normal normal 600 24px Nunito" : "")};
        font: ${({ selD }) => ( selD ? "normal normal 600 15px Nunito" : "")};
    }
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
    font: normal normal 600 12px 'Nunito';
    font: ${({ fro }) => (fro ? "normal normal normal 11px 'Nunito'" : "")};
    letter-spacing: 0px;
    color: #0A194E;
    opacity: 1;
    margin-right: 0.5rem;
    margin-top: ${({ fro }) => (fro ? "0.2rem" : "")};

    @media (min-width: 52em) {
        font: normal normal 600 18px 'Nunito';
        font: ${({ fro }) => (fro ? "normal normal normal 14px 'Nunito'" : "")};
        margin-top: ${({ fro }) => (fro ? "-0.5rem" : "")};
    }
`;

const Span = styled.span`
    letter-spacing: 0px;
    color: #0D1F5F;
    opacity: 1;
    font: normal normal bold 10px 'Nunito', sans-serif;
    font: ${({ nav, navP, navPa }) => (nav || navP || navPa ? "normal normal 600 16px Nunito" : "")};
    margin-left: 0.5rem;
    margin: ${({ navP }) => (navP ? "auto 0.5rem" : "")};
    margin: ${({ navPa }) => (navPa ? "0.5rem auto" : "")};
    cursor: ${({ navPa }) => (navPa ? "pointer" : "")};
    margin: ${({ slash }) => (slash ? "0 0.5rem 0 -0.1rem" : "")};
    font-weight: ${({ acti }) => (acti ? "bold" : "")};
    text-decoration: ${({ sped }) => (sped ? "underline" : "")};
    margin-left: ${({ sped }) => (sped ? "-0.1rem" : "")};
    font-weight: ${({ noa }) => (noa ? "normal" : "")};
    text-align: center;
    text-align: ${({ selD }) => (selD ? "left" : "")};

    @media (min-width: 52em) {
        margin: ${({ navP }) => (navP ? "auto 0.5rem auto 1.5rem" : "")};
        font: normal normal bold 12px/16px 'Nunito', sans-serif;
    }
`;

export {
    P,
    Span,
    H3,
    H2,
}