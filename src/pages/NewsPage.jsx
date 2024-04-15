// src/components/pages/NewsPage.jsx

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import NewsFeed from "../components/templates/NewsFeed";
import SearchBar from "../components/molecules/SearchBar";
import Filters from "../components/organisms/Filters";
import useNewsAPI from "../api/useGetNews";

const FilterContainerWrapper = styled.div`
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
  width: 100%;
  align-items: center;
  gap: 20px;
`;

const NewsPage = () => {
  const { articles, loading } = useNewsAPI();
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({
    startDate: "",
    endDate: "",
    source: "",
    category: "",
  });

  useEffect(() => {
    console.log("here", articles);
    setFilteredData(articles);
  }, [articles]);

  const applyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const resetFilters = () => {
    setAppliedFilters({
      startDate: "",
      endDate: "",
      source: "",
      category: "",
    });
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(articles);
    } else {
      const filteredNews = articles.filter(
        (article) =>
          article?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          article?.description
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase())
      );
      setFilteredData(filteredNews);
    }
  }, [articles, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const computeCategories = useCallback(() => {
    const uniqueCategoriesSet = new Set();
    articles.map((article) => uniqueCategoriesSet.add(article.category));
    const uniqueCategories = Array.from(uniqueCategoriesSet);
    return uniqueCategories;
  }, [articles]);

  return (
    <div>
      <SearchBar placeholder="Search articles..." onSearch={handleSearch} />
      <Filters
        onApply={applyFilters}
        onReset={resetFilters}
        articles={articles}
        setFilteredData={setFilteredData}
        appliedFilters={appliedFilters}
        categories={computeCategories()}
      />
      {loading ? <p>Loading...</p> : <NewsFeed articles={filteredData} />}
    </div>
  );
};

export default NewsPage;
