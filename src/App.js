import styled from "styled-components";
import Action from "./Components/Action";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Action />
    </Wrapper>
  );
}

export default App;
