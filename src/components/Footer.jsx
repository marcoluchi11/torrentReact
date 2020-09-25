import React from "react";
import styled from "@emotion/styled";
const Pie = styled.footer`
  display: flex;
  justify-content: center;
  height: 40px;

  p {
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 4px;
    color: #ffffff;
  }
`;
const Footer = () => {
  return (
    <Pie className="row">
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
    </Pie>
  );
};

export default Footer;
