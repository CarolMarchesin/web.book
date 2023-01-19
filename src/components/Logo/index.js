import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const ImgLogo = styled.img`
  margin-right: 20px;
`;

function Logo() {
  return (
    <LogoContainer>
      <ImgLogo src={logo} alt="logo"/>
      <p>
        <strong>My</strong>Books
      </p>
    </LogoContainer>
  );
}
export default Logo;
