import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  z-index: 1000;
  padding: 2rem 10rem;
  border-bottom: 0.2rem solid;

  @media screen and (max-width: 960px) {
    padding: 2rem 5rem;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
`;

export const Nav = styled.nav`
  @media screen and (max-width: 960px) {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    border-top: 0.1rem solid #be9c79;
    position: fixed;
    top: 93px;
    right: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    transition: 0.5s all ease;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 960px) {
    height: 100%;
    width: 33%;
    background: #fff;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    float: right;
  }

  @media screen and (max-width: 700px) {
    width: 35%;
  }

  @media screen and (max-width: 600px) {
    width: 42%;
  }
`;

export const MenuItem = styled.li`
  @media screen and (max-width: 960px) {
    margin: 0.5rem 0;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1.5rem;
  color: #666;
  font-family: sans-serif;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #be9c79;
    transition: 0.5s all ease;
  }

  @media screen and (max-width: 960px) {
    display: block;
    padding: 1rem 0;
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    font-size: 1.1rem;
    border-radius: 5rem;
    text-align: center;
    &:hover {
      background: #333;
      color: #fff;
    }
  }
  @media screen and (max-width: 700px) {
    width: 9rem;
  }

  @media screen and (max-width: 600px) {
    width: 8.5rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 2.5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #be9c79;
      margin-right: 0.5rem;
    }
  }
`;
