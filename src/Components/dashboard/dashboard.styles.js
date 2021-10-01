import styled  from "styled-components";

const DashboardCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const DashBody = styled.div`
    margin-top: 1rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
`;

const ActiveLoans = styled.div`
    width: 94%;
    height: 230px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
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
    display: flex;
    flex-direction: row;
    width: 97%;
    justify-content: space-between;
`;

const EmptyDiv = styled.div`
    width: 220px;
    height: 210px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 16px;
    opacity: 1;
    margin-bottom: 3rem;
`;

const EmptyItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
`;

const EmptySquare = styled.div`
    width: 46px;
    width: ${({ wide }) => (wide ? "90px" : "")};
    height: 36px;
    background: #D3DFEA 0% 0% no-repeat padding-box;
    background: ${({ wide }) => (wide ? "#D3DFEA24 0% 0% no-repeat padding-box" : "")};
    border: ${({ wide }) => (wide ? "1px solid #D2DFE9" : "")};
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 1.5rem;
`;

const EmptyRec = styled.div`
    width: 90px;
    width: ${({ next }) => (next ? "152px" : "")};
    height: 0px;
    border: 3px solid #D3DFEA;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 1.5rem;
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