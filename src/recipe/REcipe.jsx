// import style from './Recipe.module.css';

// console.log(style)

const Recipe = ({ data, itherator }) => {

  let i = 0;
  return (
    <li key={itherator}>
        <img src={data.img} alt={data.name}/>
      <p ><span >{data.time}</span>min</p>
      <p ><span >{data.servining}</span>servicios</p>
      <p ><span >{data.calories}</span>calories</p>
      <h2>Difficulty</h2>
      <p >Easy</p>
      <p >Medium</p>
      <p >Hard</p>
    </li>
  );
};
export default Recipe;