// import styled from "styled-component";
import styled from "styled-components"

const Img = styled.img`
  width: 200px;
  height: 200px;
`
const LIstOme = styled.div`
  display:flex;
  gap:10px;
`

const H2 = styled.h2`
  font-size:15px
`
const Recipe = ({ data, itherator }) => {

  let i = 0;
  return (
    <li key={itherator}>
        <Img src={data.img} alt={data.name}/>
        <H2>{data.name}</H2>
        <LIstOme>
        <p ><span >{data.time}</span>min</p>
      <p ><span >{data.servining}</span>servicios</p>
      <p ><span >{data.calories}</span>calories</p>
        </LIstOme>
      
      <h2>Difficulty</h2>
      <p >Easy</p>
      <p >Medium</p>
      <p >Hard</p>
    </li>
  );
};
export default Recipe;