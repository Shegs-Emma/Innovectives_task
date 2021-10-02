import styled from "styled-components";

const DeviceCategoryCon = styled.div`
    display: flex;
    flex-direction: column;
`;

const DeviceBody = styled.div`
    margin-top: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 52em) {
        padding-left: 3rem;
    }
`;

const Categories = styled.div`
    display: flex;
`;

const SpanCate = styled.div`
    margin: auto 0;
`;

const DeviceSelect = styled.div`
    width: 90%;
    height: 190px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    @media (min-width: 52em) and (max-width: 72em){
        width: 90%;
        padding-left: 2rem;
    }

    @media (min-width: 72.063em) {
        width: 63%;
        padding-left: 2rem;
    }
`;

const Devices = styled.div`
    width: 97%;
    display: flex;
    justify-content: space-between;

    @media (min-width: 52em) {
        width: 85%;
    }
`;

const Device = styled.div`
    display: flex;
    flex-direction: column;
    width: 16%;
    text-align: center;
`;

const Triangle = styled.div`
    position: absolute;
    z-index: 43;
    bottom: 19.8rem;
    margin-left: 1rem;

    width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 20px solid #ffffff;

    @media (max-width: 23.438em) {
        bottom: 15.8rem;
    }

    @media (min-width: 52em) {
        bottom: 11rem;
        margin-left: 2rem;
    }
`;

export {
    DeviceCategoryCon,
    DeviceBody,
    Categories,
    SpanCate,
    DeviceSelect,
    Devices,
    Device,
    Triangle
}