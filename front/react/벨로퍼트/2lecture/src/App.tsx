import { createGlobalStyle } from "styled-components";
import TodoContext from "./components/TodoContext";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #e9ecef;
  }
`;

const App = () => {
  return (
    <TodoContext>
      <GlobalStyle />
      <TodoTemplate />
    </TodoContext>
  );
};

export default App;
