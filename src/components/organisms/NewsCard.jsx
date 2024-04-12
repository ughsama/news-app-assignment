import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const NewsCard = ({ title, description, imageUrl, linkToArticle }) => {
  return (
    <Container>
      <a href={linkToArticle}>
        {imageUrl && <Image src={imageUrl} alt={title} />}
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </a>
    </Container>
  );
};

export default NewsCard;
