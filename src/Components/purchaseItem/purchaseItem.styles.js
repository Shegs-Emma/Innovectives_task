import styled from "styled-components";

const MobileLoan = styled.div`
    width: 88%;
    height: 200px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    @media (min-width: 52em) and (max-width: 72em){
        width: 88%;
    }

    @media (min-width: 72.063em) {
        width: 63%;
    }
`;

const PurchaseButtons = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 55%;
    justify-content: space-between;

    @media (max-width: 23.438em) {
        width: 55%;
    }

    @media (min-width: 52em) and (max-width: 72em){
        width: 35%;
    }

    @media (min-width: 72.063em) {
        width: 30%;
    }
`;

export {
    MobileLoan,
    PurchaseButtons
};