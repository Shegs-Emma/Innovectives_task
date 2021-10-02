import styled  from "styled-components";

const DashboardCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const DashBody = styled.div`
    margin-top: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 52em) {
        padding-left: 3rem;
    }
`;

const ActiveLoans = styled.div`
    width: 94%;
    height: 230px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media (min-width: 52em) and (max-width: 72em){
        width: 94%;
        padding-left: 0.8rem;
    }

    @media (min-width: 72.063em) {
        width: 94%;
        padding-left: 2rem;
    }
`;

const LoanItems = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    border-bottom: 1px solid #DDDDDD;
    padding: 0.5rem 0.5rem 0.5rem 0;
    justify-content: space-between;
`;

const EmptyDivs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    width: 97%;
    
    @media (min-width: 52em) and (max-width: 72em){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        width: 97%;
    }

    @media (min-width: 72.063em) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const EmptyDiv = styled.div`
    width: 180px;
    height: 170px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 16px;
    opacity: 1;
    margin-bottom: 2rem;

    @media (max-width: 23.438em) {
        width: 160px;
        height: 150px;
    }

    @media (min-width: 52em) and (max-width: 72em){
        margin-bottom: 1rem;
        width: 200px;
        height: 190px;
    }

    @media (min-width: 72.063em) {
        margin-bottom: 3rem;
        width: 220px;
        height: 210px;
    }
`;

const EmptyItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
`;

const EmptySquare = styled.div`
    width: 36px;
    width: ${({ wide }) => (wide ? "80px" : "")};
    height: 26px;
    background: #D3DFEA 0% 0% no-repeat padding-box;
    background: ${({ wide }) => (wide ? "#D3DFEA24 0% 0% no-repeat padding-box" : "")};
    border: ${({ wide }) => (wide ? "1px solid #D2DFE9" : "")};
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 1.5rem;

    @media (max-width: 23.438em) {
        width: 32px;
        width: ${({ wide }) => (wide ? "85px" : "")};
        height: 22px;
        margin-bottom: 1rem;
    }

    @media (min-width: 52em) {
        width: 46px;
        height: 36px;
        width: ${({ wide }) => (wide ? "90px" : "")};
    }
`;

const EmptyRec = styled.div`
    width: 80px;
    width: ${({ next }) => (next ? "132px" : "")};
    height: 0px;
    border: 3px solid #D3DFEA;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 1.5rem;

    @media (min-width: 52em) {
        width: 90px;
        width: ${({ next }) => (next ? "152px" : "")};
    }
`;

const DevL = styled.div`
    display: flex;
`;

export {
    DashboardCont,
    DashBody,
    ActiveLoans,
    LoanItems,
    EmptyDivs,
    EmptyDiv,
    EmptyItems,
    EmptySquare,
    EmptyRec,
    DevL
}