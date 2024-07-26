import './App.css';
import Title from './title/Title';
import List from "./list/LIst";
import recipes from "./recipes.json";
import styled from "styled-components"

const Listt = styled.ul`

background-color: rgb(250, 226, 94)
`

function App() {
  return (
    
    <Listt className="App">

      <Title/>

<List recipes={recipes}/>

    </Listt>
  );
}

export default App;
