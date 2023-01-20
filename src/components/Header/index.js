import Logo from "../Logo";
import IconsHeader from "../IconsHeader";
import OptionsHeader from "../OptionsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-image: linear-gradient(90deg, #e5dcd0 25%, #2f2e2e 185%);
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
