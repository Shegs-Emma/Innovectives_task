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

    @media (max-width: 23.438em) {
        height: 52px;
        width: 95%;
        margin-right: 3%;
    }

    @media (min-width: 52em) and (max-width: 72em){
        height: 72px;
        width: 45%;
    }

    @media (min-width: 72.063em) {
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
    width: 23%;
    padding: 0.5rem;
    border-radius: 15px;

    position: absolute;
    top: 3.2rem;
    right: 2rem;
    z-index: 10;

    @media (min-width: 52em) {
        width: 9%;
        padding: 1rem;
        top: 4.2rem;
        right: 4rem;
    }
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
