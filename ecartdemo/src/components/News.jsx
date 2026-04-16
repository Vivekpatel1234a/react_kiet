import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&apiKey=006377b9a4ab4ee0a838a20da541ab32")
      .then(res => res.json())
      .then(data => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

 if(loading)return <h1>Loading... Continues......</h1>
 if(error)return <h1>{error}</h1>

  return (
    <ul>
      {news.map((e, i) => (
        <li key={i}>{e.title}</li>
      ))}
    </ul>
  );
}