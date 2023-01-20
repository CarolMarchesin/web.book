import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { Books } from "./dataSearch";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #e5dcd0 25%, #2f2e2e 185%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 470px;
  width: 100%;
  
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.0em;
  text-align: center;
  width: 100%;
  font-family: Tahoma;
  `;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
  font-family: Lucida Console;

`;

function Search() {
  const [booksSearch, setbooksSearch] = useState([]);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="escreva sua próxima leitura"
        onBlur={(evento) => {
          const textDigit = evento.target.value;
          const resultSearch = Books.filter((book) =>
            book.name.includes(textDigit)
          );
          setbooksSearch(resultSearch);
        }}
      />
      {booksSearch.map((book) => (
        <div>
          <p>{book.name}</p>
          <img src={book.src} alt="livro" width="200px" />
        </div>
      ))}
    </SearchContainer>
  );
}

export default Search;
