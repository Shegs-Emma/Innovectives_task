import styled from "styled-components";

const Nav = styled.div`
    height: 72px;
    width: 100%;
    border-bottom: 1px solid #DDDDDD;
    display: flex;
    flex-direction: column;
`;

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
`;

const NavItems = styled.div`
    height: 72px;
    width: 35%;
    display: flex;
    margin: auto 0;
`;

const Support = styled.div`
    display: flex;
    margin: auto 1rem auto 0;
`;

const Profile = styled.div`
    display: flex;
    margin: auto 0 auto 1rem;
    width: 50%;
    height: 72px;
    padding-left: 2.5rem;
    border-left: 1px solid #DDDDDD;
    cursor: pointer;
`;

const ProfileItems = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 9%;
    padding: 1rem;
    border-radius: 15px;

    position: absolute;
    top: 4.2rem;
    right: 4rem;
    z-index: 10;
`;

export {
    Nav,
    NavItems,
    Support,
    Profile,
    ProfileItems,
    NavContainer,
}
