import React from "react";
import styled from "styled-components";
import NewsCard from "../organisms/NewsCard";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const NewsFeed = ({ articles }) => {
  return (
    <Container>
      <Title>Latest News</Title>
      <CardContainer>
        {articles?.length ? (
          articles?.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              linkToArticle={article.linkToArticle}
            />
          ))
        ) : (
          <p>no articles to display</p>
        )}
      </CardContainer>
    </Container>
  );
};

export default NewsFeed;
