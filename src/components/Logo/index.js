import logo from "../../images/logo.svg";
import logo2 from "../../images/logo2.png";

import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const ImgLogo = styled.img`
  margin-right: 0px;
  padding: 15px;
  width: 200px;
`;

function Logo() {
  return (
    <LogoContainer>
      <ImgLogo src={logo2} alt="logo"/>
    </LogoContainer>
  );
}
export default Logo;
