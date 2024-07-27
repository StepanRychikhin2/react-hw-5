import Recipe from "../recipe/REcipe";
import { nanoid } from "nanoid";
import styled from "styled-components";

const HeadLIst = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
  display: flex;
  list-style: none;
`;

const List = ({ recipes }) => {
  let it = 0;
  return (
    <HeadLIst>
      {recipes?.map((recipe) => {
        it++;
        return <Recipe data={recipe} key={it} itherator={it} />;
      })}
    </HeadLIst>
  );
};
export default List;
