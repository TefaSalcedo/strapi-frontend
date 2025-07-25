import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
          const res = await fetch("http://localhost:1337/api/articles?populate=*"); 
          const json = await res.json();
          setArticles(json.data); 
          console.log(json);
          console.log("Artículos cargados:");
          console.log(json.covers)
      } catch (error) {
          console.error("Error al cargar los artículos:", error);
          
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Artículos</h1>
      <ul>
        {articles.map((blog) => (
          <div key={blog.id} className='container'>
            <li>
              <strong>{blog.title}</strong>
              <p>{blog.description}</p>
              {console.log(blog.cover.url)}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
