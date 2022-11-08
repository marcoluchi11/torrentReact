import React from "react";
import styled from "@emotion/styled";
const Pie = styled.footer`
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  align-items: center;
  small {
    color: #fff;
  }
`;
const Footer = () => {
  return (
    <Pie className="row mt-3">
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
      <small>&copy; 2020-2022. All rights reserved.</small>
    </Pie>
  );
};

export default Footer;
