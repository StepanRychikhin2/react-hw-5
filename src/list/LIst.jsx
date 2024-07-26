import Recipe from "../recipe/REcipe";
import { nanoid } from "nanoid";
import styled from "styled-components"

const LIst = styled.ul`
align-items: center;
justify-content: center;
display:flex;
display: flex;
list-style: none;
`

const List = ({ recipes }) => {
  let it = 0;
  return (
    <LIst >
      {recipes?.map((recipe) => {
        it++;
        return (
          <Recipe data={recipe} key={it} itherator={it} />
        );
      })}
    </LIst>
  );
};
export default List;