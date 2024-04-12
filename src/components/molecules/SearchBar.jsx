import React, { useState } from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const InputContainer = styled.div`
  flex: 1;
  margin-right: 10px;
`;

const ButtonContainer = styled.div``;

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonContainer>
    </Container>
  );
};

export default SearchBar;
