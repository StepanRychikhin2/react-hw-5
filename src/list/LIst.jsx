import Recipe from "../recipe/REcipe";
import { nanoid } from "nanoid";
// import style from"./List.module.css";

// console.log(style)
// const randomId = nanoid();

const List = ({ recipes }) => {
  let it = 0;
  return (
    <ul >
      {recipes?.map((recipe) => {
        it++;
        return (
          <Recipe data={recipe} key={it} itherator={it} />
          // <li key={recipe.id}>
          //   Name: {recipe.name}
          //   Year: {recipe.year}
          //   Ingdients:
          // </li>
        );
      })}
    </ul>
  );
};
export default List;