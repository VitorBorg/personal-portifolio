import styled from "styled-components";

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  margin: 0px;
  padding: 0px;
  padding-top: 2rem;
  list-style: none;

  :hover {
    transform: scale(1, 1);
  }
`;

export const MenuLink = styled.a`
  padding: 10px;
  text-decoration: none;

  a {
    color: rgba(166, 182, 211, 1);
    text-decoration: none; /* no underline */
  }

  a:hover {
    color: #a6d3bc;
  }
`;

export const MenuPosition = styled.section`
  position: fixed;
  left: 20px;
  right: auto;
  width: auto;
  bottom: 0px;
  z-index: 10;

  display: block;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Barra = styled.div`
  content: "";
  display: flex;
  width: 1px;
  height: 190px;
  margin: 0px auto;
  background-color: #92a8d1;
  margin-top: 2rem;
`;
