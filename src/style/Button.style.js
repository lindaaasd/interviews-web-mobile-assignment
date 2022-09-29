import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 20px;
  min-width: 100px;
  margin: 10px;
  cursor: pointer;
  transition: color 0.4s linear;
  position: relative;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #588157;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
  &:hover&::before {
    transform: scaleX(1);
  }
`;

export default Button;
