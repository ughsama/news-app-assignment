import { useState, useEffect, useCallback } from "react";

const useNewsAPI = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = useCallback(async () => {
    try {
      const response1 = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
          import.meta.env.VITE_APP_NEWS_API_KEY
        }`
      );
      let data1 = await response1.json();

      const response2 = await fetch(
        `https://content.guardianapis.com/search?api-key=${
          import.meta.env.VITE_GUARDIAN_API_KEY
        }`
      );
      const data2 = await response2.json();

      const response3 = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${
          import.meta.env.VITE_NY_TIMES_API_KEY
        }`
      );
      const data3 = await response3.json();

      console.log({ data3 });

      const aggregatedData = [
        ...data1?.articles?.map((article) => ({
          ...article,
          title: article.title,
          imageUrl: article.urlToImage,
          linkToArticle: article.url,
          source: "News API",
        })),
        ...data2?.response?.results?.map((article) => ({
          ...article,
          title: article.webTitle,
          imageUrl: article.urlToImage,
          linkToArticle: article.webUrl,
          source: "Guardian",
        })),
        ...data3?.results?.map((article) => ({
          ...article,
          title: article.title,
          imageUrl: article.multimedia[0]?.url,
          linkToArticle: article.url,
          source: "NY Times",
        })),
      ];

      setArticles(aggregatedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { articles, loading };
};

export default useNewsAPI;
