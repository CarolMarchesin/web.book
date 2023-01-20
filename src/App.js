import Header from "./components/Header/index.js";
import styled from "styled-components";
import Search from "./components/Search/index.js";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #e5dcd0 25%, #2f2e2e 185%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search/>
    </AppContainer>
  );
}

export default App;
