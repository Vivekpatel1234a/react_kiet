import { useState, useEffect } from "react";
import axios from "axios";

function APINews() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setError] = useState(null);

  async function fetchNews() {
    try {
      setLoad(true);
      setError(null);

      const response = await axios.get(
        "https://picsum.photos/v2/list"
      );
      //console.log(response.data);
      
      setNews(response.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoad(false);
    }
    
  }

  useEffect(() => {
    fetchNews();
  }, []);

  if (load) return <h1>Loading...</h1>;
  if (err) return <h1 style={{ color: "red" }}>{err}</h1>;

  return (
    <div className="bg-gradient-to-red from-blue-500 to bg-purple-500 flex flex-wrap">
    
      {news.map((item) => (
        <img src={item.download_url} alt="" className="h-200px w-200px m-5"/>
      ))}
    </div>
  );
}

export default APINews;
