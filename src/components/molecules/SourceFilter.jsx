import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  /* width: 100%; */

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #b3d7ff;
  }
`;

const SourceFilter = ({ onChange }) => {
  const handleSourceChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Label>Select Source:</Label>
      <Select onChange={handleSourceChange}>
        <option value="">All Sources</option>
        <option value="NY Times">New York Times</option>
        <option value="Guardian">The Guardian</option>
        <option value="News API">News API</option>
      </Select>
    </Container>
  );
};

export default SourceFilter;
