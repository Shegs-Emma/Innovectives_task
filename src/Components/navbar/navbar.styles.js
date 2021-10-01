import styled from "styled-components";

const Nav = styled.div`
    border-bottom: 1px solid #DDDDDD;
    height: 52px;
    display: flex;
    flex-direction: column;

    @media (min-width: 52em) {
        height: 72px;
        width: 100%;    
    }
`;

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 52em) {
        justify-content: right;
    }
`;

const NavItems = styled.div`
    height: 52px;
    width: 80%;
    display: flex;
    margin: auto 0;
    justify-content: end;

    @media (min-width: 52em) {
        height: 72px;
        width: 35%;
    }
`;

const Support = styled.div`
    display: flex;
    margin: auto 0.2rem auto 0;

    @media (min-width: 52em) {
        margin: auto 1rem auto 0;
    }
`;

const Profile = styled.div`
    display: flex;
    margin: auto 0 auto 1rem;
    width: 40%;
    height: 52px;
    padding-left: 1.5rem;
    border-left: 1px solid #DDDDDD;
    cursor: pointer;

    @media (min-width: 52em) {
        height: 72px;
        padding-left: 2.5rem;
        width: 50%;
    }
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

const Logo = styled.div`
    display: block;
    
    @media (min-width: 52em) {
        display: none;
    }
`;

export {
    Nav,
    NavItems,
    Support,
    Profile,
    ProfileItems,
    NavContainer,
    Logo,
}
