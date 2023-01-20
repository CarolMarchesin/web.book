import styled from "styled-components";

const ListOptions = styled.ul`
  display: flex;
`;

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100px;
  font-size: 14px;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
  font-family: 'Helvetica';
  color: #7b1f84;
  font-weight: bold;
`;

const textOptions = ["Categorias", "Favoritos", "Minha estante"];

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
