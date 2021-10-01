import styled from "styled-components";

const MobileLoan = styled.div`
    width: 63%;
    height: 200px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
`;

const PurchaseButtons = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 35%;
    justify-content: space-between;
`;

export {
    MobileLoan,
    PurchaseButtons
};