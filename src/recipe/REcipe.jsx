// import style from './Recipe.module.css';

// console.log(style)

const Recipe = ({ data, itherator }) => {

  let i = 0;
  return (
    <li key={itherator} >
      <p >Name: <span >{data.name}</span></p>
      <p >Year: {data.year}</p>
      <p >Ingdients:</p>
      <img src={data.img} alt={data.name}/>
    </li>
  );
};
export default Recipe;