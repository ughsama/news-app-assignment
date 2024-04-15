import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DateRangeFilter from "../molecules/DateFilter";
import SourceFilter from "../molecules/SourceFilter";
import CategoryFilter from "../molecules/CategoryFilter";
import Button from "../atoms/Button";

const FilterContainerWrapper = styled.div`
  position: sticky;
  margin-bottom: auto;
  display: flex;
  width: auto;
  justify-content: space-between;
  height: auto;
  background-color: #f9f9f9;
  margin-top: 30px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Filters = ({
  onApply,
  onReset,
  articles,
  setFilteredData,
  appliedFilters,
  categories,
}) => {
  const [localFilters, setLocalFilters] = useState(appliedFilters);

  useEffect(() => {
    applyFilters(localFilters);
  }, [localFilters]);

  const applyFilters = (filters) => {
    let filteredNews = articles;

    if (filters.startDate && filters.endDate) {
      filteredNews = filteredNews.filter(
        (article) =>
          new Date(article.publishedAt) >= new Date(filters.startDate) &&
          new Date(article.publishedAt) <= new Date(filters.endDate)
      );
    }

    if (filters.source) {
      filteredNews = filteredNews.filter(
        (article) => article.source === filters.source
      );
    }

    if (filters.category) {
      filteredNews = filteredNews.filter((article) =>
        article.category.includes(filters.category)
      );
    }

    setFilteredData(filteredNews);
  };

  const handleApplyFilters = () => {
    onApply(localFilters);
  };

  const handleResetFilters = () => {
    setLocalFilters({
      startDate: "",
      endDate: "",
      source: "",
      category: "",
    });
    onReset();
  };

  return (
    <FilterContainerWrapper>
      <DateRangeFilter
        value={{
          startDate: localFilters.startDate,
          endDate: localFilters.endDate,
        }}
        onChange={(dates) =>
          setLocalFilters((prevFilters) => ({ ...prevFilters, ...dates }))
        }
      />
      <SourceFilter
        value={localFilters.source}
        onChange={(source) =>
          setLocalFilters((prevFilters) => ({
            ...prevFilters,
            source: source,
          }))
        }
      />
      <CategoryFilter
        value={localFilters.category}
        categories={categories}
        onChange={(category) =>
          setLocalFilters((prevFilters) => ({
            ...prevFilters,
            category: category,
          }))
        }
      />
      <ButtonsContainer>
        {/* seems unnecessary to have an apply button */}
        {/* <Button style={{ marginLeft: "auto" }} onClick={handleApplyFilters}>
          Apply
        </Button> */}
        <Button style={{ marginLeft: "auto" }} onClick={handleResetFilters}>
          Reset
        </Button>
      </ButtonsContainer>
    </FilterContainerWrapper>
  );
};

export default Filters;
