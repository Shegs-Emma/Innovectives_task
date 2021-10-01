import styled from "styled-components";

const DeviceCategoryCon = styled.div`
    display: flex;
    flex-direction: column;
`;

const DeviceBody = styled.div`
    margin-top: 1rem;
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
`;

const Categories = styled.div`
    display: flex;
`;

const SpanCate = styled.div`
    margin: auto 0;
`;

const DeviceSelect = styled.div`
    width: 63%;
    height: 190px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 16px #0000000A;
    border-radius: 8px;
    opacity: 1;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
`;

const Devices = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
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
    bottom: 11rem;
    margin-left: 2rem;

    width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-top: 20px solid #ffffff;
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