import styled from "styled-components";

const TableCont = styled.div`
    width: 66%;
    height: 230px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding: 1.5rem 0;
    overflow-y: scroll;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    text-align: left;
    position: sticky;
    letter-spacing: 0px;
    color: #0D1F5F;
    opacity: 1;
    font: normal normal bold 16px 'Nunito', sans-serif;
`;

const TR = styled.tr`
    /* background-color: yellowgreen; */
    border-bottom: 1px solid #DDDDDD;
    
`;
const TH = styled.th`
    position: sticky;
    /* background-color: orange; */
`;
const TableBody = styled.tbody`
    height: 20rem;
`;

const TD = styled.td`
    width: ${({ name }) => (name ? "18%" : "")};
    width: ${({ desc }) => (desc ? "28%" : "")};
    width: ${({ amt }) => (amt ? "24%" : "")};
    width: ${({ img }) => (img ? "12%" : "")};
    margin-right: ${({ name }) => (name ? "16%" : "")};
    text-align: left;
    letter-spacing: 0px;
    color: #0D1F5F;
    opacity: 1;
    font: normal normal normal 12px/16px 'Nunito', sans-serif;
`;


export {
    TableCont,
    TableHead,
    TableBody,
    TH,
    TR,
    TD,
    Table
}