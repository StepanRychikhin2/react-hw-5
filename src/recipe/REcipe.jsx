// import styled from "styled-component";
import styled from "styled-components";

const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  margin: 20px;
`;
const LIstOme = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
  height: 50px;
`;
const Span = styled.span`
  font-size: 15px;
  margin-right: 4px;
`;
const P = styled.p`
  margin-left: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
`;

const LIstTwo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
  height: 50px;
  gap: 20px;
`;

const PTwo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgb(252, 64, 64);
  border-radius: 20px;
  width: 70px;
  height: 40px;
  color: #fff;
`;
const LIsttt = styled.div`
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
`;

// function whatColr() {
 
// }

// let rel = {backgroundColor: "red"};
// function awdawd() {
//   if (data.easy) {
//     const awd = rel.textContent = {backgroundColor: "gray"};
//     console.log("truee")
//   } else if (data.medium) {
//     const awd2 = rel.textContent = {backgroundColor: "red"};
//     console.log("truee")
//   } else if (data.hard) {
//     console.log("truee")
//     const awd3 = rel.textContent = {backgroundColor: "green"};
//   }
 
// }
// awdawd()
// console.log(rel)

const Recipe = ({ data, itherator }) => {
  let i = 0;

  return (
    <li key={itherator}>
      <Img src={data.img} alt={data.name} />
      <H2>{data.name}</H2>
      <LIstOme>
        <P>
          <Span>{data.time}</Span>min
        </P>
        <P>
          <Span>{data.servining}</Span>servicios
        </P>
        <P>
          <Span>{data.calories}</Span>calories
        </P>
      </LIstOme>
      <LIsttt>
        <h2>Difficulty</h2>
        <LIstTwo>
          <PTwo style={{background:data.easy}} >Easy</PTwo>
          <PTwo style={{background:data.medium}}>Medium</PTwo>
          <PTwo style={{background:data.hard}}>Hard</PTwo>
        </LIstTwo>
      </LIsttt>
    </li>
  );
};
export default Recipe;
