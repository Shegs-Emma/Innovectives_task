import styled from "styled-components";

const ButtonContain = styled.button`
    width: 170px;
    width: ${({ dev, sub }) => (dev || sub ? "123px" : "")};
    width: ${({ pur }) => (pur ? "92px" : "")};
    width: ${({ bac }) => (bac ? "72px" : "")};
    height: 35px;
    height: ${({ dev }) => (dev ? "50px" : "")};
    height: ${({ pur }) => (pur ? "36px" : "")};
    margin-top: ${({ dev }) => (dev ? "2rem" : "")};
    background: #0D1F5F 0% 0% no-repeat padding-box;
    background: ${({ dev, pur, bac }) => (dev || pur|| bac ? "#D3DFEA24 0% 0% no-repeat padding-box" : "")};
    background: ${({ sub }) => ( sub ? "#1DB291 0% 0% no-repeat padding-box" : "")};
    border: ${({ dev, pur, sub, bac }) => (dev || pur || sub || bac ? "1px solid #D2DFE9" : "")};
    box-shadow: 0px 8px 8px #00000014;
    border-radius: 8px;
    opacity: 1;
    font-size: x-small;
    font-size: ${({ dev }) => (dev ? "medium" : "")};
    font-family: 'Nunito';
    font-weight: bold;
    letter-spacing: 0px;
    color: #FFFFFF;
    color: ${({ dev, pur, bac }) => (dev || pur || bac ? "#0A194E" : "")};
    opacity: 1;
    display: ${({ dev }) => (dev ? "flex" : "")};
    justify-content: center;
    padding-top: ${({ dev }) => (dev ? "1rem" : "")};
    cursor: pointer;
`;

export {
    ButtonContain
}