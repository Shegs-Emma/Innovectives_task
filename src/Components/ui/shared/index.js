import styled from "styled-components";

const AnyRow = styled.div`
    width: 100%;
    display: ${({ emp, loan }) => ( emp || loan ? "flex" : "")};
    margin-bottom: ${({ emp }) => ( emp ? "1rem" : "")};
    width: ${({ loan }) => ( loan ? "55%" : "")};
    margin-left: ${({ loan }) => ( loan ? "1.5rem" : "")};
    justify-content: ${({ loan }) => ( loan ? "space-between" : "")};
    margin-top: ${({ noF }) => ( noF ? "1rem" : "")};
`;

export {
    AnyRow
};