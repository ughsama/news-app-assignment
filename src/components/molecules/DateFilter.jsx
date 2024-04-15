import React, { useState } from "react";
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

const DateInput = styled.input`
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

const DateRangeFilter = ({ value, onChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    onChange({ startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    onChange({ endDate: e.target.value });
  };

  return (
    <Container>
      <Label>Start Date:</Label>
      <DateInput
        type="date"
        value={value.startDate}
        onChange={handleStartDateChange}
      />
      <Label>End Date:</Label>
      <DateInput
        type="date"
        value={value.endDate}
        onChange={handleEndDateChange}
      />
    </Container>
  );
};

export default DateRangeFilter;
