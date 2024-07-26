import './App.css';
import Title from './title/Title';
import List from "./list/LIst";
import recipes from "./recipes.json";
import styled from "styled-components"

const Listt = styled.ul`

background-color: #d8db13;
`
const Br = styled.br`

`
function App() {
  return (
    
    <Listt className="App">
      <Br/>
      <Title/>
      <Br/>
<List recipes={recipes}/>
<Br/>
    </Listt>
  );
}

export default App;
