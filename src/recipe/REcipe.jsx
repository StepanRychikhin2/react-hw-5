// import styled from "styled-component";
import styled from "styled-components";

const Photo = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  margin: 20px;
`;
const ListHeadInfo = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
  height: 50px;
`;
const Text = styled.span`
  font-size: 15px;
  margin-right: 4px;
`;
const TextIn = styled.p`
  margin-left: 20px;
`;

const MeinTitle = styled.h2`
  font-size: 20px;
`;

const ListFooterDifficty = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
  height: 50px;
  gap: 20px;
`;

const ListComponents = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 70px;
  height: 40px;
  color: #fff;
`;
const ListFooterInf = styled.div`
  background-color: #fff;
  width: 430px;
  border-radius: 20px;
`;

const ImageFooterSvg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const Recipe = ({ data, itherator }) => {
  let i = 0;

  return (
    <li key={itherator}>
      <Photo src={data.img} alt={data.name} />
      <MeinTitle>{data.name}</MeinTitle>
      <ListHeadInfo>
        <TextIn>
          <Text>
            <ImageFooterSvg
              src="https://raw.githubusercontent.com/StepanRychikhin2/react-hw-5/3f76d9ae4ac76183db8601c687c560e8a31d3558/src/img/clock.svg"
              alt="clock"
            />
            {data.time}
          </Text>
          min
        </TextIn>
        <TextIn>
          <Text>
            <ImageFooterSvg
              src="https://raw.githubusercontent.com/StepanRychikhin2/react-hw-5/3f76d9ae4ac76183db8601c687c560e8a31d3558/src/img/coloCalors.svg"
              alt="clock"
            />
            {data.servining}
          </Text>
          servicios
        </TextIn>
        <TextIn>
          <Text>
            <ImageFooterSvg
              src="https://raw.githubusercontent.com/StepanRychikhin2/react-hw-5/3f76d9ae4ac76183db8601c687c560e8a31d3558/src/img/analitick.svg"
              alt="clock"
            />
            {data.calories}
          </Text>
          calories
        </TextIn>
      </ListHeadInfo>
      <ListFooterInf>
        <MeinTitle>Difficulty</MeinTitle>
        <ListFooterDifficty>
          <ListComponents style={{ background: data.easy }}>
            Easy
          </ListComponents>
          <ListComponents style={{ background: data.medium }}>
            Medium
          </ListComponents>
          <ListComponents style={{ background: data.hard }}>
            Hard
          </ListComponents>
        </ListFooterDifficty>
      </ListFooterInf>
    </li>
  );
};
export default Recipe;
