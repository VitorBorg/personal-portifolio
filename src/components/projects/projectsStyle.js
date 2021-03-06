import styled from "styled-components";

export const SectionBase = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 70px;
  padding: 0px;
  list-style: none;
  list-style-type: none;
  height: auto;
  max-width: 100%;
  margin: 0px 50px 0px 50px;
`;

export const H2Title = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: left;
  text-align: left;
  margin: 10px 0px 40px;
  font-size: clamp(26px, 5vw, 32px);
`;

export const DivAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.7vw;

    li {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 1390px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 999px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Barra = styled.div`
  content: "";
  display: flex;
  width: 200px;
  height: 0.1px;
  margin: 0px auto;
  background-color: #92a8d1;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const PText = styled.p`
  text-align: left;
  line-height: 20px;
  font-weight: 600;
  padding: 1rem;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  ::before {
    content: "";
    position: absolute;
    left: 0px;
  }
`;
