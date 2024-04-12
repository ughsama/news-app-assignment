import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #b3d7ff;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
