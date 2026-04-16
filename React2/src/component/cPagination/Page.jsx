import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currpage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  async function fetchNews() {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=dd87f40200304e7289285277a13c8071"
      );
      console.log(res);
      setNews(res.data.articles || []);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);

  // Pagination
  const lastIndex = currpage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalpages = Math.ceil(news.length / itemPerPage);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (news.length === 0) return <h2>No News Found haaaa</h2>;

  return (
    <div>
      <h2>Latest News haaa...</h2>

      {currentNews.map((item, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{item.title}</h3>

          {item.urlToImage && (
            <img src={item.urlToImage} width="200" alt="news" />
          )}

          <p>{item.content}</p>
        </div>
      ))}

      {/* Pagination */}
      <button
        disabled={currpage === 1}
        onClick={() => setCurrentPage(prev => prev - 1)}
      >
        Previous
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {currpage} of {totalpages}
      </span>

      <button
        disabled={currpage === totalpages}
        onClick={() => setCurrentPage(prev => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Page;