import styled from "styled-components";
import mastheadImg from "../components/mainPage/masthead.jpg";

const Masthead = styled.div`
  background-image: url(${mastheadImg});
  width: 100%;
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: none;
  padding: 0;
`;

export default Masthead;
