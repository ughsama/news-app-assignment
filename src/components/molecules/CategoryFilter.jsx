// CategoryFilter.jsx
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

const Option = styled.option``;

const CategoryFilter = ({ categories, onChange, value }) => {
  const handleCategoryChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Label>Select Category:</Label>
      <Select onChange={handleCategoryChange} value={value}>
        <Option value="">All Categories</Option>
        {categories?.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default CategoryFilter;
