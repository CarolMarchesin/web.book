import "./style.css";
import Logo from "../Logo";
import IconsHeader from "../IconsHeader";
import OptionsHeader from "../OptionsHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  );
}

export default Header;
