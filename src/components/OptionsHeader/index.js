import styled from "styled-components";

const ListOptions = styled.ul`
  display: flex;
`;

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
`;

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
  return (
    <ListOptions>
      {textOptions.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </ListOptions>
  );
}

export default OptionsHeader;
