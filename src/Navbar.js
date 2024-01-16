import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Times New Roman", Times, Serif;
  text-transform: uppercase;
  margin-left: 20px;

  &:hover{color: black};
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Title>MOVIE-APP</Title>
        <CartIconContainer>
          <CartImg
            alt="cart-icon"
            src="https://cdn-icons-png.flaticon.com/128/5542/5542671.png"
          ></CartImg>
          <CartCount color="yellow" show={true}>
            4
          </CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}

export default Navbar;
