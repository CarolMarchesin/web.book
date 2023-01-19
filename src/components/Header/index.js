import Logo from "../Logo";
import IconsHeader from "../IconsHeader";
import OptionsHeader from "../OptionsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

export default Header;
