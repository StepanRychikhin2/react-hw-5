import './App.css';
import Title from './title/Title';
import List from "./list/LIst";
import recipes from "./recipes.json";
function App() {
  return (
    <div className="App">
      <Title/>
<List recipes={recipes}/>
    </div>
  );
}

export default App;
