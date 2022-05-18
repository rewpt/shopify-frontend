import styled from "styled-components";
import { Title } from "../components/Suggestions/Title";

const Dropdown = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 5rem;
`;
const Option = styled.option`
  width: 40px;
  height: 40px;
`;

export const ChangeBot = (props) => {
  const { handleBot } = props;
  const options = [
    { name: "Curie", code: "text-curie-001" },
    { name: "Babbage", code: "text-babbage-001" },
    { name: "Ada", code: "text-ada-001" },
  ];
  return (
    <>
      <Title>Choose your bot</Title>
      <Dropdown
        onChange={(e) => {
          const newBot = options.filter((option) => {
            return option.code === e.target.value;
          });
          handleBot(newBot[0]);
        }}
      >
        {options.map((option, index) => {
          return (
            <Option key={index} value={option.code}>
              {option.name}
            </Option>
          );
        })}
      </Dropdown>
    </>
  );
};
