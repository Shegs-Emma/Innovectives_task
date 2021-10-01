import styled from "styled-components";

const DashboardContainer = styled.div`
    width: 100%;
    height: 1080px;
    background-color: #0D1F5F;
    opacity: 1;
`;

const EmptyItm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-left: 2rem;
`;

const Square = styled.div`
    width: 24px;
    height: 24px;
    background-color: #334585;
    border-radius: 2px;
    opacity: 1;
    margin-right: 1rem;
`;

const Bars = styled.div`
    width: 89px;
    width: ${({ empT }) => ( empT ? "148px" : "")};
    width: ${({ empTL }) => ( empTL ? "136px" : "")};
    width: ${({ empTLN }) => ( empTLN ? "120px" : "")};
    width: ${({ tinny }) => ( tinny ? "167px" : "")};
    width: ${({ tin }) => ( tin ? "133px" : "")};
    width: ${({ tini }) => ( tini ? "86px" : "")};
    width: ${({ tinin }) => ( tinin ? "159px" : "")};
    width: ${({ tin0 }) => ( tin0 ? "134px" : "")};
    width: ${({ tinin0 }) => ( tinin0 ? "109px" : "")};
    height: 0px;
    border: 4px solid #334585;
    opacity: 1;
    border-radius: 2px;
    margin: auto 0;
`;

const LoanCont = styled.div`
    width: 268px;
    height: 48px;
    background-color: #334585;
    border-radius: 0px 8px 8px 0px;
    opacity: 1;
    border-left: 6px solid #3BE5BF;
    opacity: 1;
`;

const New = styled.div`
    width: 42px;
    height: 24px;
    background-color: #3BE5BF;
    border-radius: 8px;
    opacity: 1;
    margin: auto 0;
`;

const TinyBars = styled.div`
    width: 37px;
    width: ${({ smaller }) => ( smaller ? "11px" : "")};
    height: 0px;
    border: 2px solid #334585;
    opacity: 1;
    border-radius: 2px;
    margin-right: 0.5rem;
`;

const Tinnies = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

export {
    DashboardContainer,
    EmptyItm,
    Square,
    Bars,
    LoanCont,
    New,
    TinyBars,
    Tinnies,
}